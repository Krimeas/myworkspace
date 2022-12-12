const { AuthenticationError } = require('apollo-server-express');
const { Comment, Project, Task, User } = require('../models');
const { signToken } = require('../utils/auth');

/*
Queries:
    GetUserById
    GetUserCommentsByUsername
    GetProjectCommentsByUsername
    GetUserCoworkers
    GetUserProjects
    GetProjects
    GetProjectById
    GetProjectMembers
    GetProjectTasks
    GetFriendComments
*/
/*
Mutations: Should we just put CRUD stuff in there? Why is login there too? Do parent, context, args mean the same things as Query?
    createUser/
    createUserComment/ ->   updateUserComments/
    createProjectComment/
    createProject/  ->  updateProjectComments/
    createTask/  -> updateProjectTasks/
    addProjectMember/ -> updateUserProjects -> updateUserCoworkers
    updateUserAboutMe
    User and Project comments are comments made to the user/project
*/
//login is probably updating a token for a user which is why it is considered a mutation
//add a check to make sure project owner == context.user.username before doing mutations for more authentication
const resolvers = {
    Query: {
        //what do parents, context, args params do??????????
        GetUserByUsername: async (parent, { username }) => {
            return User.findOne({ username });
        },
        GetUserCommentsByUsername: async (parent, { username }) => {
            const params = username ? { username: username, userRecipient: { $ne: null } } : {};
            return Comment.find(params).sort({ createdAt: -1 });
        },
        GetProjectCommentsByUsername: async (parent, { username }) => {
            const params = username ? { username: username, projectRecipient: { $ne: null } } : {};
            return Comment.find(params).sort({ createdAt: -1 });
        },
        GetUserCoworkers: async (parent, { username }) => {
            return User.findOne({ username }).populate('coworkers');
        },
        GetUserProjects: async (parent, { username }) => {
            return User.findOne({ username }).populate('projects');
        },
        GetProjects: async (parent, args, context) => {
            if(context.user) return Project.find();
            throw new AuthenticationError('Incorrect credentials');
        },
        GetProjectById: async (parent, { projectId }, context) => {
            if(context.user) return Project.findOne({ _id: projectId }).populate('comments').populate('members').populate('tasks');
            throw new AuthenticationError('Incorrect credentials');
        },
        //consolidated all getproject things into GetProjectById
        // GetProjectMembers: async (parent, { projectId }) => {
        //     return Project.findOne({ _id: projectId }).populate('members');
        // },
        // GetProjectTasks: async (parent, { projectId }) => {
        //     return Project.findOne({ _id: projectId }).populate('tasks');
        // },
        // GetProjectComments: async (parent, { projectId }) => {
        //     return Project.findOne({ _id: projectId}).populate('comments');
        // },
        me: async (parent, args, context) => {
            if(context.user) {
                return User.findOne({_id: context.user._id});
            }
            throw new AuthenticationError('Incorrect credentials');
        },
        GetFriendComments: async (parent, {username}) => {
            const comments = [];
            const user = User.findOne({ username }).populate('coworkers');
            for (const coworker in user.coworkers) {
                comments.push(Comment.find({ username: coworker.username, userRecipient: { $ne: null } }));
            }
            return comments;
        },
    },

    Mutation: {
        createUser: async (parent, { username, email, password, firstName, lastName }) => {
            const user = await User.create({ username, email, password, firstName, lastName });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },

        createProjectComment: async (parent, { commentText, projectName }, context) => {
            console.log(context.user);
            if (context.user) {
                const comment = await Comment.create({
                    commentText,
                    projectRecipient: projectName,
                    username: context.user.username,
                });
                console.log('--------------------------------------------------------------------')
                await Project.findOneAndUpdate(
                    { projectName: projectName },
                    { $addToSet: { comments: comment._id } }
                );
                return comment;
            }
            throw new AuthenticationError('You need to be logged in!');
        },


        createUserComment: async (parent, { commentText }, context) => {
            if (context.user) {
                const comment = await Comment.create({
                    commentText,
                    commentAuthor: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { comment: comment._id } }
                );
                return comment;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        createProject: async (parent, { projectName, projectDescription}, context) => {
            if(context.user) {
                const project = await Project.create({ projectName, projectDescription, owner: context.user.username });
                await User.findOneAndUpdate({username: context.user.username}, { $addToSet: {projects: project._id}})
                return project;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        
        createTask: async (parent, { taskName, projectName }, context) => {
            console.log(context.user);
            if (context.user) {
                const task = await Task.create({
                    taskName,
                    username: context.user.username,
                    project: projectName
                });
                

                await Project.findOneAndUpdate(
                    { projectName },
                    { $addToSet: { tasks: task._id } }
                )
                return task;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        //memberName = username of member
        addProjectMember: async (parent, { projectName, memberName }, context) => {
            if (context.user) {

                //add new member to project
                const project = await Project.findOneAndUpdate(
                    { projectName: projectName },
                    { $addToSet: { members: memberName } }
                );

                //update member's projects to have the project they were added in && add user as a coworker of member
                await User.findOneAndUpdate(
                    { username: memberName },
                    { $addToSet: { projects: project.id, coworkers: context.user.username } }
                )

                // add member as a coworker of user
                await User.findOneAndUpdate(
                    { username: context.user.username},
                    { $addToSet: { coworkers: memberName}}
                )
                return project;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        updateUserAboutMe: async (parent, {aboutText}, context) => {
            if(context.user) {
                const user = await User.findOneAndUpdate(
                    { username: context.user.username},
                    { aboutMe: aboutText}
                )
                return user;
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    },

}

module.exports = resolvers;
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
const resolvers = {
    Query: {
        //what do parents, context, args params do??????????
        GetUserById: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
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
        GetProjects: async () => {
            return Project.find();
        },
        GetProjectById: async (parent, { projectId }) => {
            return Project.findOne({ _id: projectId });
        },
        GetProjectMembers: async (parent, { projectName }) => {
            return Project.findOne({ projectName }).populate('members');
        },
        GetProjectTasks: async (parent, { projectName }) => {
            return Project.findOne({ projectName }).populate('tasks');
        },
        // Add a me Query
        GetFriendComments: async (parent, {username}) => {
            const comments = [];
            const user = User.findOne({ username }).populate('coworkers');
            for (const coworker in user.coworkers) {
                comments.push(Comment.find({ username: coworker.username, userRecipient: { $ne: null } }));
            }
            return comments;
        },
    },

    //commented out authentication for apollo sandbox testing, make sure to uncomment it out later.

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
            if (context.user) {
                const comment = await comment.create({
                    commentText,
                    commentAuthor: context.user.username,
                });

                await Project.findOneAndUpdate(
                    { projectName: projectName },
                    { $addToSet: { comment: comment._id } }
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

        createProject: async (parent, { projectName, projectDescription, ownerName }, context) => {
            if(context.user) {
                const owner = User.findOne({username: ownerName});
                const project = await Project.create({ projectName, projectDescription, owner });
                return project;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        createTask: async (parent, { taskName, projectName }, context) => {
            if (context.user) {
                const task = await Task.create({
                    taskName,
                    taskAuthor: context.user.username,
                });

                await Project.findOneAndUpdate(
                    { projectName },
                    { $addToSet: { task: task._id } }
                )
                return task;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        addProjectMember: async (parent, { projectName, member }, context) => {
            if (context.user) {

                await User.findOneAndUpdate(
                    { username: member.username },
                    { $addToSet: { projects: projectName } } //may have to user project id
                )

                await User.findOneAndUpdate(
                    { username: context.user.username},
                    { $addToSet: { coworkers: member._id}}
                )

                const projectMember = await Project.findOneAndUpdate(
                    { projectName: projectName },
                    { $addToSet: { members: member._id } }
                );
                return projectMember;
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
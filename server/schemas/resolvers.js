const { AuthenticationError } = require('apollo-server-express');
const { Comment, Project, Task, User} = require('../models');
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
    createUser
    createProjectComment
    createUserComment
    createProject
    createTask
    addProjectMember
    updateProjectComments
    updateUserProjects
    updateUserCoworkers
    updateUserComments
    updateUserAboutMe
    User and Project comments are comments made to the user/project
*/
//login is probably updating a token for a user which is why it is considered a mutation
const resolvers = {
    Query: {
        //what do parents, context, args params do??????????
        GetUserById: async (parent, {userId}) => {
            return User.findOne({_id: userId});
        },
        GetUserCommentsByUsername: async (parent, {username}) => {
            const params = username? {username: username, userRecipient:{$ne:null}} : {};
            return Comment.find(params).sort({createdAt: -1});
        },
        GetProjectCommentsByUsername: async (parent, {username}) => {
            const params = username? {username: username, projectRecipient:{$ne:null}} : {};
            return Comment.find(params).sort({createdAt: -1}); 
        }, 
        GetUserCoworkers: async (parent, {username}) => {
            return User.findOne({username}).populate('coworkers');
        },
        GetUserProjects: async (parent, {username}) => {
            return User.findOne({username}).populate('projects');
        },
        GetProjects: async () => {
            return Project.find();
        },
        GetProjectById: async (parent, {projectId}) => {
            return Project.findOne({_id: projectId});
        },
        GetProjectMembers: async (parent, {projectName}) => {
            return Project.findOne({projectName}).populate('members');
        },
        GetProjectTasks: async (parent, {projectName}) => {
            return Project.findOne({projectName}).populate('tasks');
        },
        GetFriendComments: async (parent, {username}) => {
            const comments = [];
            const user = User.findOne({username}).populate('coworkers');
            for(const coworker in user.coworkers) {
                comments.push(Comment.find({username: coworker.username, userRecipient:{$ne:null}}));
            }
            return comments;
        },
    },

    Mutation: {
        createUser: async (parent, {username, email, password, firstName, lastName}) => {
            const user = await User.create({username, email, password, firstName, lastName});
            const token = signToken(user);
            return { token, user };
        }
    }
}

module.exports = resolvers;
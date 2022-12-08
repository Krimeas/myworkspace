const { AuthenticationError } = require('apollo-server-express');
const { Comment, Project, Task, User} = require('../models');
const { signToken } = require('../utils/auth');

/*
Queries:
    GetUserById
    GetUserCommentsByUsername
    GetProjectCommentsByUsername
    GetUserFriends
    GetUserProjects
    GetProjects
    GetProjectById
    GetProjectMembers
    GetProjectTasks
    GetFriendComments
*/
/*
Mutations: Should we just put CRUD stuff in there? Why is login there too? Do parent, context, args mean the same things as Query?

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
        GetUserFriends: async (parent, {username}) => {
            return User.findOne({username}).populate('friends');
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
            const friends = User.findOne({username}).populate('friends');
            return Comment.
        },
    },

    Mutation: {

    }
}

module.exports = resolvers;
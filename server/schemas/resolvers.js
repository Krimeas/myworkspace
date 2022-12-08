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
        } 

    },

    Mutation: {

    }
}

module.exports = resolvers;
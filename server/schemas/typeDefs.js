// add createdAt and updatedAt fields for models that have {timestamps: true}
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        firstname: String
        lastname: String
        aboutme: String
        profilepicture: String
        friends: [user]!
        projects: [project]!
        comments: [comment]!
        
    }

    type Task {
        _id: ID
        taskName: String
        project: [project]!
    }
    
    type Project {
        _id: ID
        projectName: String
        projectDescription: String
        owner: [user]!
        members :[user]!
        tasks: [task]!
        comments: [comment]!
        dueDate: Date
    }

    type Comment {
        _id: ID
        username: String
        commentText: String
        userRecipient: [user]!
        projectRecipient: [project]!
    }

    type Query {
        GetUserById(userId: ID!): User
        GetUserCommentsByUsername(username: String!): [Comment]
        GetProjectCommentsByUsername(username: String!): [Comment]
        GetUserCoworkers(username: String!): User
        GetUserProjects(username: String!): User
        GetProjects: [Project]
        GetProjectById(projectId: ID!): Project
        GetProjectMembers(projectName: String!): Project
        GetProjectTasks(projectName: String!): Project
        GetFriendComments(username: String!): [Comment]
        me: User
      }
      
`

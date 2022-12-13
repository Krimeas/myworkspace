// add createdAt and updatedAt fields for models that have {timestamps: true}
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        firstName: String
        lastName: String
        aboutMe: String
        profilePicture: String
        coworkers: [String]
        projects: [Project]!
        comments: [Comment]!
    }

    type Task {
        _id: ID
        username: String!
        taskName: String!
        projectId: String!
        isOpen: Boolean
        isInProgress: Boolean
        isComplete: Boolean
        createdAt: String
        updatedAt: String
    }
    
    type Project {
        _id: ID
        projectName: String
        projectDescription: String
        owner: String!
        members: [String]!
        tasks: [Task]!
        comments: [Comment]!
        dueDate: String
        createdAt: String
        updatedAt: String
    }

    type Comment {
        _id: ID
        username: String
        commentText: String
        userRecipient: String
        projectRecipient: String
        createdAt: String
        updatedAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        GetUserByUsername(username: String!): User
        GetUserCommentsByUsername(username: String!): [Comment]
        GetProjectCommentsByUsername(username: String!): [Comment]
        GetUserCoworkers(username: String!): [User]
        GetUserProjects(username: String!): User
        GetProjects: [Project]
        GetProjectById(projectId: ID!): Project
        GetFriendComments(username: String!): [Comment]
        GetTask(taskId: ID!): Task
        me: User
      }

      type Mutation {
        createUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
        login(email: String!, password: String!): Auth
        createProjectComment(commentText: String!, projectName: String!): Comment
        createUserComment(commentText: String!): Comment
        createProject(projectName: String!, projectDescription: String!): Project
        createTask(taskName: String!, projectId: ID!): Task
        addProjectMember(projectName: String!, memberName: String!): Project
        updateUserAboutMe(aboutText: String!): User
        deleteTask(taskName: String!, projectId: ID!): Task
      }
`;
// change addprojectmember
module.exports = typeDefs;

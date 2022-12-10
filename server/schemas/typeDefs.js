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
        coworkers: String
        projects: [Project]!
        comments: [Comment]!
    }

    type Task {
        _id: ID
        username: String!
        taskName: String!
        project: String!
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
        GetUserById(userId: ID!): User
        GetUserCommentsByUsername(username: String!): [Comment]
        GetProjectCommentsByUsername(username: String!): [Comment]
        GetUserCoworkers(username: String!): [User]
        GetUserProjects(username: String!): User
        GetProjects: [Project]
        GetProjectById(projectId: ID!): Project
        GetProjectMembers(projectName: String!): Project
        GetProjectTasks(projectName: String!): Project
        GetFriendComments(username: String!): [Comment]
        GetProjectComments(projectName: String!): Project
        me: User
      }

      type Mutation {
        createUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
        login(email: String!, password: String!): Auth
        createProjectComment(commentText: String!, projectName: String!): Comment
        createUserComment(commentText: String!): Comment
        createProject(projectName: String!, projectDescription: String!): Project
        createTask(taskName: String!, projectName: String!): Task
        addProjectMember(projectName: String!, memberName: String!): Project
        updateUserAboutMe(aboutText: String!): User
      }
`;
// change addprojectmember
module.exports = typeDefs;

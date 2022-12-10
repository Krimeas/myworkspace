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
        friends: [User]!
        projects: [Project]!
        comments: [Comment]!
    }

    type Task {
        _id: ID
        taskName: String
        project: [Project]!
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
        owner: User!
        members :[User]!
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

    input UserInput {
        _id: ID
        username: String
        email: String
        password: String
        firstName: String
        lastName: String
        aboutMe: String
        profilePicture: String
        friends: [UserInput]!
        projects: [ProjectInput]!
        comments: [CommentInput]!
    }

    input ProjectInput {
        _id: ID
        projectName: String
        projectDescription: String
        owner: UserInput!
        members :[UserInput]!
        tasks: [TaskInput]!
        comments: [CommentInput]!
        dueDate: String
        createdAt: String
        updatedAt: String
    }

    input TaskInput {
        _id: ID
        taskName: String
        project: [ProjectInput]!
        isOpen: Boolean
        isInProgress: Boolean
        isComplete: Boolean
        createdAt: String
        updatedAt: String
    }

    input CommentInput {
        _id: ID
        username: String
        commentText: String
        userRecipient: [UserInput]!
        projectRecipient: [ProjectInput]!
        createdAt: String
        updatedAt: String
    }


    type Query {
        GetUserById(userId: ID!): User
        GetUserCommentsByUsername(username: String!): [Comment]
        GetProjectCommentsByUsername(username: String!): [Comment]
        GetUserCoworkers(username: String!): [User]
        GetUserProjects(username: String!): [Project]
        GetProjects: [Project]
        GetProjectById(projectId: ID!): Project
        GetProjectMembers(projectName: String!): [User]
        GetProjectTasks(projectName: String!): [Task]
        GetFriendComments(username: String!): [Comment]
        GetProjectComments(projectName: String!): Project
        me: User
      }

      type Mutation {
        createUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
        login(email: String!, password: String!): Auth
        createProjectComment(commentText: String!, projectName: String!): Comment
        createUserComment(commentText: String!): Comment
        createProject(projectName: String!, projectDescription: String!, ownerName: String!): Project
        createTask(taskName: String!, projectName: String!): Task
        addProjectMember(projectName: String!, member: UserInput!): Project
        updateUserAboutMe(aboutText: String!): User
      }
`;

module.exports = typeDefs;

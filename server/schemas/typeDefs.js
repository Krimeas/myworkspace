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
        coworkers: [User]!
        projects: [Project]!
        comments: [Comment]!
        
    }

    type Task {
        _id: ID
        taskName: String
        project: [Project]!
    }
    
    type Project {
        _id: ID
        projectName: String
        projectDescription: String
        owner: [user]!
        members :[user]!
        tasks: [Task]!
        comments: [Comment]!
        dueDate: Date
    }

    type Comment {
        _id: ID
        username: String
        commentText: String
        userRecipient: [User]!
        projectRecipient: [Project]!
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

    type Mutation {
        createUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): User
        login(email: String!, password: String!): User
        createProjectComment(commentText: String!, projectName: String!): Comment
        createUserComment(commentText: String!): Comment
        createProject(projectName: String!, projectDescription: String!, owner: User!): Project
        createTask(taskName: String!, projectName: String!): Task
        addProjectMember(projectName: String!, member: User!): Project
        updateUserAboutMe(aboutText: String!): User
        updateProjectDescription(projectName: String!, projectDescription: String!): Project
        
    }
      
`

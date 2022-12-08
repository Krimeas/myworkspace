// add createdAt and updatedAt fields for models that have {timestamps: true}
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
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

    type task {
        taskName: String
        project: [project]!
    }
    
    type project {
        projectName: String
        projectDescription: String
        owner: [user]!
        members :[user]!
        tasks: [task]!
        comments: [comment]!
        dueDate: Date
    }

    type comment {
        username: String
        commentText: String
        userRecipient: [user]!
        projectRecipient: [project]!
    }

    type Query {
        
    }
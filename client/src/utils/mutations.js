import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;

export const CREATE_USER = gql`
mutation CreateUser($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!) {
  createUser(username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
    token
    user {
      username
      _id
    }
  }
}
`;

// export const CREATE_USERCOMMENT = gql`
//   mutation createUserComment($messageText: String!) {
//     createUserComment(messageText: $messageText) {
//       _id
//       messageText
//       messageAuthor
//       createdAt
//     }
//   }
// `;

// export const UPDATE_USERCOMMENT = gql`
//   mutation updateUserComment($messageText: String!) {
//     updateUserComment(messageText: $messageText) {
//       _id
//       messageText
//       messageAuthor
//       createdAt
//     }
//   }
// `;

export const CREATE_PROJECT = gql`
mutation CreateProject($projectName: String!, $projectDescription: String!) {
  createProject(projectName: $projectName, projectDescription: $projectDescription) {
    owner
    _id
    projectName
    projectDescription
  }
}
`;

export const CREATE_PROJECTCOMMENT = gql`
mutation Mutation($commentText: String!, $projectName: String!) {
  createProjectComment(commentText: $commentText, projectName: $projectName) {
    commentText
    username
    projectRecipient
    createdAt
    updatedAt
  }
}
`;

// export const UPDATE_PROJECTCOMMENT = gql`
//   mutation updateProjectComment($messageText: String!) {
//     updateProjectComment(messageText: $messageText) {
//       _id
//       messageText
//       messageAuthor
//       createdAt
//     }
//   }
// `;

export const CREATE_TASK = gql`
mutation CreateTask($taskName: String!, $projectId: ID!) {
  createTask(taskName: $taskName, projectId: $projectId) {
    _id
    username
    taskName
    project
    updatedAt
    createdAt
    isComplete
    isInProgress
    isOpen
  }
}
`;

// export const UPDATE_PROJECTTASK = gql`
//   mutation updateProjectTask($taskText: String!) {
//     updateProjectTask(taskText: $taskText) {
//       _id
//       taskText
//       createdAt
//     }
//   }
// `;

export const DELETE_PROJECTTASK = gql`
mutation Mutation($taskName: String!, $projectId: ID!) {
  deleteTask(taskName: $taskName, projectId: $projectId) {
    _id
    username
    taskName
  }
}
`;

// export const DELETE_PROJECTTASK = gql`
//   mutation deleteProjectTask($taskText: String!) {
//     deleteProjectTask(taskText: $taskText) {
//       _id
//       taskText
//       createdAt
//     }
//   }
// `;

// export const ADD_PROJECTMEMBER = gql`
//   mutation addProjectMemeber($) {
//     addProjectMember() {
//       _id
// export const ADD_PROJECTMEMBER = gql`
//   mutation addProjectMemeber($) {
//     addProjectMember() {
//       _id

//     }
//   }
// `;
//     }
//   }
// `;

// export const UPDATE_USERPROJECTS = gql`
//   mutation updateUserProjects($) {
//     updateUserProjects() {
//       _id
// export const UPDATE_USERPROJECTS = gql`
//   mutation updateUserProjects($) {
//     updateUserProjects() {
//       _id

//     }
//   }
// `;
//     }
//   }
// `;

// export const UPDATE_USERCOWORKERS = gql`
//   mutation updateUserCoworkers($) {
//     updateUserCoworkers() {
//       _id
// export const UPDATE_USERCOWORKERS = gql`
//   mutation updateUserCoworkers($) {
//     updateUserCoworkers() {
//       _id

//     }
//   }
// `;
//     }
//   }
// `;

// export const UPDATE_USERABOUTME = gql`
//   mutation updateUserAboutMe($) {
//     updateUserAboutMe() {
//       _id
// export const UPDATE_USERABOUTME = gql`
//   mutation updateUserAboutMe($) {
//     updateUserAboutMe() {
//       _id

//     }
//   }
// `;
//     }
//   }
// `;
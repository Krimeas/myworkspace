import { gql } from '@apollo/client';


// export const QUERY_ME = gql`
// query Me {
//   me {
//     username
//     email
//     firstName
//     lastName
//     aboutMe
//   }
// }`;

// export const QUERY_USER = gql`
// query GetUserByUsername($username: String!) {
//   GetUserByUsername(username: $username) {
//     _id
//     email
//     firstName
//     lastName
//     username
//   }
// `;

// export const QUERY_USERCOMMENTS = gql`
//   query getUserCommentsByUsername {
//     userComment {
//       _id
//       messageText
//       messageAuthor
//       createdAt
//     }
//   }
// `;

export const QUERY_PROJECTS = gql`
query GetProjects {
  GetProjects {
    _id
    projectName
    projectDescription
    owner
    createdAt
  }
}
`;

export const QUERY_PROJECT = gql`
query GetProjects($projectId: ID!) {
  GetProjectById(projectId: $projectId) {
    projectName
    projectDescription
    owner
    members
    comments {
      _id
      username
      commentText
      createdAt
      updatedAt
    }
    tasks {
      _id
      username
      taskName
      createdAt
      updatedAt
      isComplete
      isInProgress
      isOpen
    }
  }
}
`;

// export const QUERY_PROJECTCOMMENTS = gql`
// query GetProjectComments($projectName: String!) {
//   GetProjectComments(projectName: $projectName) {
//     _id
//     comments {
//       commentText
//       username
//       createdAt
//       updatedAt
//     }
//     projectName
//     projectDescription
//     owner
//   }
// }
// `;

// export const QUERY_PROJECTTASKS = gql`
// query GetProjectTasks($projectName: String!) {
//   GetProjectTasks(projectName: $projectName) {
//     projectName
//     projectDescription
//     tasks {
//       username
//       taskName
//       isComplete
//       isOpen
//       isInProgress
//       createdAt
//       updatedAt
//     }
//   }
// }
// `;
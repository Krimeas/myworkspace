import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_USERCOMMENTS = gql`
  query getUserCommentsByUsername {
    userComment {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;

export const QUERY_PROJECT = gql`
  query getProjects {
    Project {
      _id
      projectTitle
      createdAt
    }
  }
`;

export const QUERY_PROJECTCOMMENTS = gql`
  query getComments {
    Comment {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;

export const QUERY_PROJECTTASKS = gql`
  query getTasks {
    Task {
      _id
      taskText
      createdAt
    }
  }
`;
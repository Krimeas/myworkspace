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
  query getMessages {
    Messages {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;

export const ADD_PROJECT = gql`
  query getProjects {
    Projects {
      _id
      projectTitle
      createdAt
    }
  }
`;

export const QUERY_PROJECTCOMMENTS = gql`
  query getMessages {
    Messages {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;

export const ADD_PROJECTTASKS = gql`
  query getTasks {
    Tasks {
      _id
      taskText
      createdAt
    }
  }
`;
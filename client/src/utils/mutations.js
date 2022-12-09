import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USERCOMMENT = gql`
  mutation addMessage($messageText: String!) {
    addMessage(messageText: $messageText) {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject($projectTitle: String!) {
    addProject(projectTitle: $projectTitle) {
      _id
      projectTitle
      createdAt
    }
  }
`;

export const ADD_PROJECTCOMMENT = gql`
  mutation addMessage($messageText: String!) {
    addMessage(messageText: $messageText) {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;

export const ADD_PROJECTTASK = gql`
  mutation addTask($taskText: String!) {
    addTask(taskText: $taskText) {
      _id
      taskText
      createdAt
    }
  }
`;

export const DELETE_PROJECTTASK = gql`
  mutation deleteTask($taskText: String!) {
    deleteTask(taskText: $taskText) {
      _id
      taskText
      createdAt
    }
  }
`;

export const UPDATE_PROJECTTASK = gql`
  mutation updateTask($taskText: String!) {
    updateTask(taskText: $taskText) {
      _id
      taskText
      createdAt
    }
  }
`;
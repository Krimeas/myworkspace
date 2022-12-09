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

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USERCOMMENT = gql`
  mutation createUserComment($messageText: String!) {
    createUserComment(messageText: $messageText) {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;

export const UPDATE_USERCOMMENT = gql`
  mutation updateUserComment($messageText: String!) {
    updateUserComment(messageText: $messageText) {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation createProject($projectName: String!) {
    createProject(projectName: $projectTitle) {
      _id
      projectName
      createdAt
    }
  }
`;

export const CREATE_PROJECTCOMMENT = gql`
  mutation createProjectComment($messageText: String!) {
    createProjectComment(messageText: $messageText) {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;

export const UPDATE_PROJECTCOMMENT = gql`
  mutation updateProjectComment($messageText: String!) {
    updateProjectComment(messageText: $messageText) {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;

export const CREATE_TASK = gql`
  mutation createTask($taskText: String!) {
    createTask(taskText: $taskText) {
      _id
      taskText
      createdAt
    }
  }
`;

export const UPDATE_PROJECTTASK = gql`
  mutation updateProjectTask($taskText: String!) {
    updateProjectTask(taskText: $taskText) {
      _id
      taskText
      createdAt
    }
  }
`;

export const DELETE_PROJECTTASK = gql`
  mutation deleteProjectTask($taskText: String!) {
    deleteProjectTask(taskText: $taskText) {
      _id
      taskText
      createdAt
    }
  }
`;

export const ADD_PROJECTMEMBER = gql`
  mutation addProjectMemeber($) {
    addProjectMember() {
      _id

    }
  }
`;

export const UPDATE_USERPROJECTS = gql`
  mutation updateUserProjects($) {
    updateUserProjects() {
      _id

    }
  }
`;

export const UPDATE_USERCOWORKERS = gql`
  mutation updateUserCoworkers($) {
    updateUserCoworkers() {
      _id

    }
  }
`;

export const UPDATE_USERABOUTME = gql`
  mutation updateUserAboutMe($) {
    updateUserAboutMe() {
      _id

    }
  }
`;
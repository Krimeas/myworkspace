import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { DELETE_PROJECTTASK } from "../utils/mutations";

import Auth from "../utils/auth";

const DeleteTask = ({ task }) => {
  const {taskName,  projectId} = task;

  const [deleteTask, { error, data }] = useMutation(DELETE_PROJECTTASK);

  const deleteTaskEvent = async (event) => {
    event.preventDefault();
    try {
      const { data } = await deleteTask({
        variables: { taskName, projectId },
      });
      console.log(data);
      window.location.assign(`/projects/${projectId}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div>
        <button type="submit" className="btn btn-danger btn-block mb-4" onClick={deleteTaskEvent}>
          Delete
        </button>
      </div>
    </main>
  );
};

export default DeleteTask;

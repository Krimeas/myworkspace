import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { DELETE_PROJECTTASK } from "../utils/mutations";

import Auth from "../utils/auth";

const DeleteTask = ({ projectId }) => {
  const [formState, SetFormState] = useState({
    taskName: "",
  });

  const [deleteTask, { error, data }] = useMutation(DELETE_PROJECTTASK);

  const handleChange = (event) => {
    const { name, value } = event.target;

    SetFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await deleteTask({
        variables: { ...formState, projectId },
      });
      console.log(data);
      window.location.assign(`/projects/${projectId}`);
    } catch (e) {
      console.error(e);
    }
    SetFormState({
      taskName: "",
    });
  };

  return (
    <main>
      <div>
        <button type="submit" className="btn btn-danger btn-block mb-4">
          Delete
        </button>
      </div>
    </main>
  );
};

export default DeleteTask;

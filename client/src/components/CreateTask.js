import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { CREATE_TASK } from "../utils/mutations";

import Auth from "../utils/auth";

const CreateTask = ({projectId}) => {
  const [formState, SetFormState] = useState({
    taskName: "",
  });

  const [createTask, { error, data }] = useMutation(CREATE_TASK);

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
      const { data } = await createTask({
        variables: { ...formState, projectId },
      });
      console.log(data);
      window.location.assign(`/projects/${projectId}/${data.createTask._id}`);
    } catch (e) {
      console.error(e);
    }
    SetFormState({
      taskName: "",
    });
  };

  return (
      <main>
        <h3>Add a Project</h3>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          ></div>
          <form onSubmit={handleFormSubmit}>
            <div className="form-outline mb-4">
              <label className="form-label">Task Name</label>
              <input
                className="form-control"
                placeholder="Task Name"
                type="taskName"
                name="taskName"
                value={formState.taskName}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Submit
            </button>
          </form>
        </div>
      </main>
  );
};

export default CreateTask;

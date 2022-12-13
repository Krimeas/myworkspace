import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { CREATE_TASK } from "../utils/mutations";

import Auth from "../utils/auth";

const AddTask = ({ projects }) => {
  const [formState, SetFormState] = useState({
    taskText: "",
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
    console.log(formState);
    try {
      // const project = dff;
      const { data } = await createTask({
        variables: { ...formState },
      });
      console.log(data);
      // window.location.assign(`/projects/${project}/${data.createTask._id}`);
    } catch (e) {
      console.error(e);
    }
    SetFormState({
      taskText: "",
    });
  };

  return (
      <main>
        <h3>Add a Task</h3>
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
                type="taskText"
                name="taskText"
                value={formState.taskText}
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

export default AddTask;

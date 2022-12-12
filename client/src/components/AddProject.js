import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { CREATE_PROJECT } from "../utils/mutations";

import Auth from "../utils/auth";

const AddProject = ({ projects }) => {
  const [formState, SetFormState] = useState({
    projectName: "",
    projectDescription: "",
  });
  const [createProject, { error, data }] = useMutation(CREATE_PROJECT);

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
      const { data } = await createProject({
        variables: { ...formState },
      });
      console.log(data);
      window.location.assign(`/projects/${data.createProject._id}`);
    } catch (e) {
      console.error(e);
    }
    SetFormState({
      projectName: "",
      projectDescription: "",
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
              <label className="form-label">Project Name</label>
              <input
                className="form-control"
                placeholder="Project Name"
                type="projectName"
                name="projectName"
                value={formState.projectName}
                onChange={handleChange}
              />
            </div>
            <label className="form-label">Project Description</label>
            <div className="form-outline mb-4">
              <input
                className="form-control"
                placeholder="Project Description"
                type="projectDescription"
                name="projectDescription"
                value={formState.projectDescription}
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

export default AddProject;

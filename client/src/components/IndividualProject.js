import React from "react";
import { Link } from "react-router-dom";

const IndividualProject = ({ project }) => {
  if (!project) {
    return <h3>THERE HAS BEEN AN ERROR</h3>;
  }
  const { _id, projectName, projectDescription, owner } = project;
  return (
    <div>
      {
        <div key={_id} className="card mb-3">
          <div>
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {projectName}
            </h4>
          </div>
          <div>
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {projectDescription}
            </h4>
          </div>
          <div>
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {owner}
            </h4>
          </div>
        </div>
      }
    </div>
  );
};

export default IndividualProject;

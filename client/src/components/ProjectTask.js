import React from 'react';
import { Link } from 'react-router-dom';

const IndividualProject = ({projects}) => {
  console.log(projects._id);
  if (!projects.tasks.length) {
    return <h3>This task is empty</h3>;
  }

  return (
    <div>
      {projects &&
        projects.map((task) => (
          <div key={project._id} className="card mb-3">
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/projects/${project._id}/${task}`}
            >
              <h4 className="card-header bg-primary text-light p-2 m-0">
              {project.projectName}
            </h4>
            </Link>
          </div>
        ))}
    </div>
  );
};
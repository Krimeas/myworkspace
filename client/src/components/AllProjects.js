import React from 'react';
import { Link } from 'react-router-dom';

const AllProjectsList = ({projects}) => {
  console.log(projects);
  if (!projects.length) {
    return <h3>There are no projects</h3>;
  }
  return (
    <div>
      {projects &&
        projects.map((project) => (
          <div key={project._id} className="card mb-3">
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/projects/${project._id}`}
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

export default AllProjectsList;

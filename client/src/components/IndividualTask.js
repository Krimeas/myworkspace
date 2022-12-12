import React from 'react';
import { Link } from 'react-router-dom';

const AllProjectTasks = ({
  ProjectTasks,
  showProjectName = true,
}) => {
  if (!ProjectTasks.length) {
    return <h3>You are not in any projects</h3>;
  }

  return (
    <div>
      {ProjectTasks &&
        ProjectTasks.map((ProjectTask) => (
          <div key={ProjectTask._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
            </h4>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/${ProjectTask._id}`}
            >
              WORDS GO HERE WHERE DO THEY SHOW UP?
            </Link>
          </div>
        ))}
    </div>
  );
};

export default AllProjectTasks;
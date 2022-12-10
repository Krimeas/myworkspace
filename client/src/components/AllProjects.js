import React from 'react';
import { Link } from 'react-router-dom';

const AllProjectsList = ({
  userProjects,
  showProjectName = true,
}) => {
  if (!userProjects.length) {
    return <h3>You are not in any projects</h3>;
  }

  return (
    <div>
      {userProjects &&
        userProjects.map((userProject) => (
          <div key={userProject._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
            </h4>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/${userProject._id}`}
            >
              WORDS GO HERE WHERE DO THEY SHOW UP?
            </Link>
          </div>
        ))}
    </div>
  );
};

export default AllProjectsList;

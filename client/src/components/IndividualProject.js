import React from 'react';
import { Link } from 'react-router-dom';

const IndividualProject = ({project}) => {
  console.log(project._id);
  if (!project.length) {
    return <h3>THERE HAS BEEN AN ERROR</h3>;
  }

  return (
    <div>
      {project &&
        project.map((project) => (
          <div key={project._id} className="card mb-3">
            <div>
              <h4 className="card-header bg-primary text-light p-2 m-0">{project.ProjectName}
              </h4>
            </div>
            <div>
              <h4 className="card-header bg-primary text-light p-2 m-0">{project.ProjectDescription}
              </h4>
            </div>
            <div>
              <h4 className="card-header bg-primary text-light p-2 m-0">{project.owner}
              </h4>
            </div>         
          </div>
        ))}
    </div>
  );
};

export default IndividualProject;
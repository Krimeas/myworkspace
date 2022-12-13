import React from "react";
import { Link } from "react-router-dom";

const IndividualTasks = ({ projectTasks, projects }) => {
  console.log(projects)
  console.log(projectTasks)
  // if (!projectTasks.length) {
  //   return <h3>You are not in any projects</h3>;
  // }
  // const { _id, taskText} = ProjectTasks;
  return (
    <div>
      {/* {projects &&
        projects.map((project) => (
        projectTasks.map((projectTask) => (
          <div key={projectTask._id} className="card mb-3">
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/projects/${project._id}/${projectTask._id}`}
            >
              <h4 className="card-header bg-primary text-light p-2 m-0">
                {projectTask.taskText}
              </h4>
            </Link>
          </div>
        ))
        ))} */}

    </div>
  );
};

export default IndividualTasks;

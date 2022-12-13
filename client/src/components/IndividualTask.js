import React from "react";
import { Link } from "react-router-dom";

const IndividualTasks = ( projects ) => {
  console.log(projects)
  // if (!projects.tasks) {
  //   return <h3>There are no tasks.</h3>;
  // }
  // const { _id, taskText} = ProjectTasks;
  return (
    <div>
      {projects &&
        projects.map((project) => (
          <div key={project.tasks.Task._id} className="card mb-3">
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/projects/${project._id}/${project.tasks.Task._id}`}
            >
              <h4 className="card-header bg-primary text-light p-2 m-0">
                {project.tasks.taskName}
              </h4>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default IndividualTasks;

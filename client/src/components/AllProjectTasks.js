import React from "react";
import { Link } from "react-router-dom";

const AllProjectTasks = ({tasks}) => {
  console.log(tasks);
  if (!tasks) {
    return <h3>There are no tasks.</h3>;
  }
  // const { _id, taskName} = tasks.task;
  return (
    <div>
      {tasks &&
        tasks.map((task) => (
          // console.log(task)
          <div key={task._id} className="card mb-3">
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/projects/${task.project}/${task._id}`}
            >
              <h4 className="card-header bg-primary text-light p-2 m-0">
                {task.taskName}
              </h4>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default AllProjectTasks;

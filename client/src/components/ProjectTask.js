import React from 'react';
import { Link } from 'react-router-dom';

const IndividualProject = ({tasks}) => {
  console.log(tasks._id);
  if (!tasks.length) {
    return <h3>This task is empty</h3>;
  }

  return (
    <div>
      {tasks &&
        tasks.map((task) => (
          <div key={task._id} className="card mb-3">
            <div>
              <h4 className="card-header bg-primary text-light p-2 m-0">{task.Name}
              </h4>
            </div>
            {/* <div key={task.Members} className="card mb-3">
              <h4 className="card-header bg-primary text-light p-2 m-0">{task.Members}
              </h4>
            </div>          */}
          </div>
        ))}
    </div>
  );
};
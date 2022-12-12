import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { Container } from "react-bootstrap";

// import ProjectMessageForm from '../components/ProjectMessageForm';
// import ProjectMessageList from '../components/ProjectMessageList';
// import MyProjectList from '../components/MyProjects';
import IndividualProject from "../components/IndividualProject";
import ProjectTask from "../components/ProjectTask";

import { QUERY_PROJECTS, QUERY_PROJECTTASKS } from "../utils/queries";
// import { ADD_PROJECTCOMMENT} from '../utils/mutations';

const SingleProject = () => {
  const { loading, data } = useQuery(QUERY_PROJECTS, QUERY_PROJECTTASKS);
  // const comments = data?.comments || [];
  const projects = data?.GetProjects || [];
  const projectTask = data?.GetProjectTasks || [];
  var {projectId} = useParams();
  const { loading, data } = useQuery(QUERY_PROJECT, {variables: { projectId }});
  const project = data?.GetProjectById || {};
  console.log(project);

  return (
    <main>
      {/* My Messages/comments should hug the left side of the page, likely col-3 */}
      <h1>THIS IS THE INDIVIDUAL PROJECTS PAGE</h1>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          {/* <ProjectMessageForm /> */}
        </div>
        {/* <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : ( null
            <ProjectMessageList
            comments={comments}
            title="Some Feed for Thought(s)..."
            />
          )}
        </div> */}
          </div>
          <div className="col-xl-8" style={{ border: "1px dotted #1a1a1a" }}>
            {/* Outputs project name and members/owner */}
            <h3>Individual Project</h3>
            <div style={{ border: "1px dotted #1a1a1a" }}>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <IndividualProject projects={projects} />
              )}
            </div>
            {/* Outputs projects tasks names */}
            <div style={{ border: "1px dotted #1a1a1a" }}>
              <h3>Project Tasks</h3>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <ProjectTask tasks={projectTask} />
              )}
            </div>
          </div>


      {/* my projects should hug the right side of the page. likely col-3 */}
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          {/* <MyProjects 
          projects={projects}
          /> */}
          
        </div>
      </div>
    </main>
  );
};

export default SingleProject;
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { Container } from "react-bootstrap";

// import ProjectMessageForm from '../components/ProjectMessageForm';
// import ProjectMessageList from '../components/ProjectMessageList';
// import MyProjectList from '../components/MyProjects';
import IndividualProject from "../components/IndividualProject";
// import ProjectTask from "../components/ProjectTask";
import CreateTask from "../components/CreateTask";

import { QUERY_PROJECT } from "../utils/queries";
// import { ADD_PROJECTCOMMENT} from '../utils/mutations';
// import { ADD_PROJECTTASK} from '../utils/mutations';

const SingleProject = () => {
  var {projectId} = useParams();
  const { loading, data } = useQuery(QUERY_PROJECT, {variables: { projectId }});
  const project = data?.GetProjectById || {};

  return (
    <Container fluid>
      <main>
        {/* My Messages/comments should hug the left side of the page, likely col-3 */}
        <div className="text-center row col-xl-12">
          <div className="col-xl-2 justify-content-left bg-primary ">
          {/* <ProjectMessageForm /> */}
        </div>
        {/* <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : ( null
            <ProjectMessageList
            comments={comments}
            title="Project COmments"
            />
          )}
        </div> */}
          <div className="col-xl-8" style={{ border: "1px dotted #1a1a1a" }}>

            <h3>Individual Project</h3>
            <div style={{ border: "1px dotted #1a1a1a" }}>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <IndividualProject project={project}/>
              )}
            </div>
            <div style={{ border: "1px dotted #1a1a1a" }}>
            {loading ? (
                <div>Loading...</div>
              ) : (
                <CreateTask/>
              )}
            </div>
            {/* <div style={{ border: "1px dotted #1a1a1a" }}>
              <h3>Project Tasks</h3>
              {/* {loading ? (
                <div>Loading...</div>
              ) : (
                <ProjectTask tasks={project} />
              )} */}
            </div>
          </div>


      {/* my projects should hug the right side of the page. likely col-3 */}
        <div className="col-xl-2 justify-content-left bg-primary ">
          {/* <MyProjects 
          projects={projects}
          /> */}
          
        </div>
      </div>
    </main>
    </Container>
  );
};

export default SingleProject;
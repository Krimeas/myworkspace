import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { Container } from "react-bootstrap";

// import MyMessageForm from '../components/MyMessageForm';
// import MyMessageList from '../components/MyMessageList';
// import MyProjects from '../components/MyProjects';
import AllProjects from "../components/AllProjects";
import AddProject from "../components/AddProject";

import { QUERY_PROJECTS } from "../utils/queries";
// import { ADD_PROJECT } from '../utils/mutations';

const Projects = () => {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.GetProjects || [];
  return (
    <Container fluid>
      <main>
        {/* My Messages/comments should hug the left side of the page, likely col-3 */}
        <div className="text-center row col-xl-12">
          <div className="col-xl-2 justify-content-left bg-primary ">
            {/* <MyMessageForm /> */}
            {/* <div className="col-12 col-xl-8 mb-3">
                {loading ? (
                  <div>Loading...</div>
                ) : ( null
                  <MyMessageList
                  comments={comments}
                  title="Some Feed for Thought(s)..."
                  />
                )}
              </div> */}
          </div>

          <div className="col-xl-8" style={{ border: "1px dotted #1a1a1a" }}>
            <div style={{ border: "1px dotted #1a1a1a" }}>
            {loading ? (
                <div>Loading...</div>
              ) : (
                <AddProject/>
              )}
            </div>
            <div style={{ border: "1px dotted #1a1a1a" }}>
            <h3>All Projects</h3>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <AllProjects projects={projects} />
              )}
            </div>
          </div>

          {/* my projects should hug the right side of the page. likely col-3 */}

          <div className="col-xl-2 justify-content-left bg-primary ">
            {/* {loading ? (
              <div>Loading...</div>
            ) : (
            <MyProjects 
            projects={projects}
            />
            )} */}
          </div>
        </div>
      </main>
    </Container>
  );
};

export default Projects;

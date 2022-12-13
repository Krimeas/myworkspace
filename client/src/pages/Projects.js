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

import { QUERY_PROJECTS, QUERY_ME } from "../utils/queries";
// import { ADD_PROJECT } from '../utils/mutations';

const Projects = () => {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.GetProjects || [];

  return (
    <main>
      {/* My Messages/comments should hug the left side of the page, likely col-3 */}
      <center><h1>THIS IS THE ALL PROJECTS PAGE</h1></center>
      <div className="flex-row justify-center"></div>
      <div
        className="col-12 col-md-10 mb-3 p-3"
        style={{ border: "1px dotted #1a1a1a" }}
      >
        {/* <MyMessageForm /> */}


        {/* <div className="col-12 col-md-8 mb-3">
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
            <AddProject />
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
    {/* <div>

        <div class="container">
          <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div class="col mb-2">
              <div class="p-3 border bg-light">Row column</div>
            </div>
            <div class="col mb-2">
              <div class="p-3 border bg-light">Row column</div>
            </div>
            <div class="col mb-2">
              <div class="p-3 border bg-light">Row column</div>
            </div>
            <div class="col mb-2">
              <div class="p-3 border bg-light">Row column</div>
            </div>
            <div class="col mb-2">
              <div class="p-3 border bg-light">Row column</div>
            </div>
            <div class="col mb-2">
              <div class="p-3 border bg-light">Row column</div>
            </div>
            <div class="col mb-2">
              <div class="p-3 border bg-light">Row column</div>
            </div>
            <div class="col mb-2">
              <div class="p-3 border bg-light">Row column</div>
            </div>
            <div class="col mb-2">
              <div class="p-3 border bg-light">Row column</div>
            </div>
            <div class="col mb-2">
              <div class="p-3 border bg-light">Row column</div>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );


};

export default Projects;

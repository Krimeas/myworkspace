import React from "react";
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { useMutation } from '@apollo/client';
import { Container } from "react-bootstrap";

// import ProjectMessageForm from '../components/ProjectMessageForm';
// import ProjectMessageList from '../components/ProjectMessageList';
// import MyProjectList from '../components/MyProjects';
// import IndividualTask from '../components/IndividualTask';

// import { QUERY_PROJECTCOMMENTS, QUERY_PROJECTS} from '../utils/queries';
// import { ADD_PROJECTCOMMENT, ADD_TASK} from '../utils/mutations';

const Tasks = () => {
  // const { loading, data } = useQuery(QUERY_PROJECTCOMMENTS, QUERY_PROJECTS);
  // const comments = data?.comments || [];
  // const projects = data?.projects || [];

  return (
    <Container fluid>
      <main>
        {/* My Messages/comments should hug the left side of the page, likely col-3 */}
        <div className="text-center row col-xl-12">
          <div className="col-xl-2 justify-content-left bg-primary ">
            {/* <ProjectMessageForm /> */}
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
            <h3>Individual Task</h3>
            <div>
              {/*  */}
              {/* Eventually, the Name gets pulled and goes here.  Top Center of page, wrapped in blue. */}
              {/*  */}
            </div>

            <div>
              {/*  */}
              {/* Eventually, the Individual Task Component goes in another div here. */}
              {/*  */}
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

export default Tasks;

import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';

// import ProjectMessageForm from '../components/ProjectMessageForm';
// import ProjectMessageList from '../components/ProjectMessageList';
// import MyProjectList from '../components/MyProjects';
// import ProjectMembers from '../components/ProjectMembers';
// import ProjectTask from '../components/ProjectTask';

import { QUERY_PROJECT } from '../utils/queries';
// import { ADD_PROJECTCOMMENT} from '../utils/mutations';

const SingleProject = () => {
  var {projectId} = useParams();
  const { loading, data } = useQuery(QUERY_PROJECT, {variables: { projectId }});
  const project = data?.GetProjectById || {};
  console.log(project);

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
          <h3>Individual Project</h3>
          <div>
            {/*  */}
            {/* Eventually, the Name gets pulled and goes here.  Top Center of page, wrapped in blue. */}
            {/*  */}
          </div>

          <div>
            {/*  */}
            {/* Eventually, the Project Memebers Component goes in another div here. Center Middle of Page */}
            {/*  */}
          </div>

          <div>
            {/*  */}
            {/* Eventually, the Project Tasks  Component goes in another div here. Center Bottom of Page*/}
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

export default SingleProject;

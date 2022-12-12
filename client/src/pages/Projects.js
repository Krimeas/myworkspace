import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';

// import MyMessageForm from '../components/MyMessageForm';
// import MyMessageList from '../components/MyMessageList';
// import MyProjectList from '../components/MyProjects';
import AllProjects from '../components/AllProjects';


import { QUERY_PROJECTS } from '../utils/queries';
// import { ADD_PROJECT } from '../utils/mutations';

const Projects = () => {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.GetProjects || [];
  return (
    <main>
      {/* My Messages/comments should hug the left side of the page, likely col-3 */}
      <h1>THIS IS THE ALL PROJECTS PAGE</h1>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          {/* <MyMessageForm /> */}
        </div>
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

      <div>
{/*  */}
        {/* Eventually, the Create New Project code goes in another div here.  Not a component */}
{/*  */}
      </div>

      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          {loading ? (<div>Loading...</div>) : (<AllProjects 
          projects={projects}/>)}
          
        </div>
      </div>

      {/* my projects should hug the right side of the page. likely col-3 */}
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
        {loading ? (
            <div>Loading...</div>
          ) : (
          <MyProjects 
          projects={projects}
          />
          )}
        </div>
      </div>
    </main>
  );
};

export default Projects;

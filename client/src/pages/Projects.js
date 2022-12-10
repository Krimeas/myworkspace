import React from 'react';
// import { useQuery } from '@apollo/client';

// import MyMessageForm from '../components/MyMessageForm';
// import MyMessageList from '../components/MyMessageList';

// import { QUERY_USERCOMMENTS, QUERY_PROJECTS} from '../utils/queries';

const Projects = () => {
  // const { loading, data } = useQuery(QUERY_USERCOMMENTS, QUERY_PROJECTS);
  // const comments = data?.comments || [];
  // const projects = data?.projects || [];

  return (
    <main>
      {/* My Messages/comments should hug the left side of the page, likely col-3 */}
      <h1>THIS IS THE PROJECTS PAGE</h1>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
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
      {/* Eventually, User Data goes in another div here. */}
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

export default Projects;
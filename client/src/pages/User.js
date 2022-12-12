import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { useMutation } from '@apollo/client';

// import MyMessageForm from '../components/MyMessageForm';
// import MyMessageList from '../components/MyMessageList';
// import MyProjectList from '../components/MyProjects';
// import UserComp from '../components/UserComp';

// import { QUERY_USERCOMMENTS, QUERY_PROJECTS} from '../utils/queries';
// import { ADD_USERCOMMENT } from '../utils/mutations';


const User = () => {
  // const { loading, data } = useQuery(QUERY_USERCOMMENTS, QUERY_PROJECTS);
  // const comments = data?.comments || [];
  // const projects = data?.projects || [];

  return (
    <main>
      {/* My Messages/comments should hug the left side of the page, likely col-3 */}
      <h1>THIS IS THE USERS PAGE</h1>
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


      <div>
{/*  */}
        {/* Eventually, the User Compoents go in another div here.  Whatever we decide those are.  About me and such? */}
{/*  */}
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

export default User;
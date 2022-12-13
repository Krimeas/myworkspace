import React from "react";
// import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import { useMutation } from '@apollo/client';

// import MyMessageForm from '../components/MyMessageForm';
// import MyMessageList from '../components/MyMessageList';
// import MyProjectList from '../components/MyProjects';
// import UserComp from '../components/UserComp';

import { QUERY_ME} from '../utils/queries';
// import { ADD_USERCOMMENT } from '../utils/mutations';

const User = () => {
  const { loading, data } = useQuery(QUERY_ME);
  // const comments = data?.comments || [];
  // const projects = data?.projects || [];
  const user = data?.me || {};

  return (
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
            <h3>USER COMPONENT</h3>
            {
              loading ? (
                <h1>Loading...</h1>
              ) : (
                <div>
                  <h3>First Name: {user.firstName}</h3>
                  <h3>Last Name: {user.lastName}</h3>
                  <h3>Username: {user.username}</h3>
                  <h3>Email: {user.email}</h3>
                </div>
                
              )
            }
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
  );
};

export default User;

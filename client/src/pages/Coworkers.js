import React from "react";
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { useMutation } from '@apollo/client';
import { Container } from "react-bootstrap";

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
    <Container fluid>
      <main>
        {/* My Messages/comments should hug the left side of the page, likely col-3 */}
        <div className="text-center row col-xl-12">
          <div className="col-xl-2 justify-content-left bg-primary ">
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
            <h3>All Coworkers COMPONENT</h3>
              {/*  */}
              {/* Eventually, the User Compoents go in another div here.  Whatever we decide those are.  About me and such? */}
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

export default User;

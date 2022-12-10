import React from 'react';
import { Link } from 'react-router-dom';

const UserCommentList = ({
  usercomments,
  showUsername = true,
}) => {
  if (!usercomments.length) {
    return <h3>No one has posted a comment in this users profile yet</h3>;
  }

  return (
    <div>
      {usercomments &&
        usercomments.map((usercomment) => (
          <div key={usercomment._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/users/${usercomment.usercommentAuthor}`}
                >
                  {/* Need to associate user Name in here - pull data how?  In the map?  Likely needed in user model?  user name or user title? */}
                  {usercomment.usercommentAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    posted this about {usercomment.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You commented on {usercomment.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{usercomment.usercommentText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/usercomments/${usercomment._id}`}
            >
              WORDS GO HERE WHERE DO THEY SHOW UP?
            </Link>
          </div>
        ))}
    </div>
  );
};

export default UserCommentList;

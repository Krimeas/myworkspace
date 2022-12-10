import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCommentList = ({
  projectcomments,
  showUsername = true,
}) => {
  if (!projectcomment.length) {
    return <h3>No one has posted a comment in this project yet</h3>;
  }

  return (
    <div>
      {projectcomments &&
        projectcomments.map((projectcomment) => (
          <div key={projectcomment._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/users/${projectcomment.projectcommentAuthor}`}
                >
                  {/* Need to associate Project Name in here - pull data how?  In the map?  Likely needed in project model?  Project name or project title? */}
                  {projectcomment.projectcommentAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    posted this about {projectName} {projectcomment.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You commented on {projectName} {projectcomment.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{projectcomment.projectcommentText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/projects/${projectcomment._id}`}
            >
              WORDS GO HERE WHERE DO THEY SHOW UP?
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ProjectCommentList;

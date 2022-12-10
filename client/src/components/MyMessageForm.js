import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { CREATE_USERCOMMENT } from '../utils/mutations';
import { QUERY_USERCOMMENTS, QUERY_USER } from '../utils/queries';

import Auth from '../utils/auth';

const MyMessageForm = () => {
  const [commentText, setCommentText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [createUserComment, { error }] = useMutation(CREATE_USERCOMMENT, {
    update(cache, { data: { createUserComment } }) {
      try {
        const { comments } = cache.readQuery({ query: QUERY_USERCOMMENTS });

        cache.writeQuery({
          query: QUERY_USERCOMMENTS,
          data: { comments: [createUserComment, ...comments] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { user } = cache.readQuery({ query: QUERY_USER });
      cache.writeQuery({
        query: QUERY_USER,
        data: { user: { ...user, comments: [...user.comments, createUserComment] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createUserComment({
        variables: {
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      setCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'commentText' && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>Post a Comment</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="thoughtText"
                placeholder="Here's a new thought..."
                value={commentText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add a comment!
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to post a comment. Please{' '}
          <Link to="/login">login</Link> 
          {/* or <Link to="/signup">signup.</Link> */}
        </p>
      )}
    </div>
  );
};

export default MyMessageForm;

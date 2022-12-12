import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    user: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
    const [addUser, { error, data }] = useMutation(CREATE_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4 row">
      <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-lg-4 col-lg-offset-4">
            <div class="container">
              <h4 class="card-header bg-dark text-light p-2">Sign Up</h4>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div class="container d-flex justify-content-center">
                <div class="col-lg-4 col-lg-offset-4">
                  <div class="d-flex justify-content-center lign-items-center">
                    <div class="vstack gap-3">

                    <div class="mb-3 mt-3">
                        <div class="col-md-3 mb-5">
                          <input
                            className="form-input"
                            placeholder="Create a username"
                            name="user"
                            type="text"
                            value={formState.user}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div class="mb-3 mt-3">
                        <div class="col-md-3 mb-5">
                          <input
                            className="form-input"
                            placeholder="Your First Name"
                            name="firstName"
                            type="text"
                            value={formState.firstName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>


                      <div class="mb-3 mt-3">
                        <div class="col-md-3 mb-5">
                          <input
                            className="form-input"
                            placeholder="Your Last Name"
                            name="lastName"
                            type="text"
                            value={formState.lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div class="mb-3 mt-3">
                        <div class="col-md-3 mb-5">
                          <input
                            className="form-input"
                            placeholder="Your email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div class="mb-3 mt-3">
                        <div class="col-md-3 mb-5">
                          <input
                            className="form-input"
                            placeholder="Create a password"
                            name="password"
                            type="password"
                            value={formState.password}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <button
              className="btn btn-block btn-primary"
              style={{ cursor: 'pointer' }}
              type="submit"
            >
              Submit
            </button>
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main >
  );
};

export default Signup;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [createUser, { error, data }] = useMutation(CREATE_USER);

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
      const { data } = await createUser({
        variables: { ...formState },
      });

      Auth.login(data.createUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4 row">
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-12 col-lg-offset-4">
            <div className="container col-lg-12">
              <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
            </div>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
            <form onSubmit={handleFormSubmit}>
              <div className="container d-flex justify-content-center">
                <div className="col-lg-12 col-lg-offset-4">
                  <div className="d-flex justify-content-center lign-items-center">
                    <div className="vstack gap-3 col-lg-10">
                      <div className="mb-3 mt-3">
                        <input
                          className="form-control"
                          placeholder="Create a username"
                          name="username"
                          type="text"
                          value={formState.username}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="mb-3 mt-3">
                        <input
                          className="form-control"
                          placeholder="Your First Name"
                          name="firstName"
                          type="text"
                          value={formState.firstName}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="mb-3 mt-3">
                        <input
                          className="form-control"
                          placeholder="Your Last Name"
                          name="lastName"
                          type="text"
                          value={formState.lastName}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="mb-3 mt-3">
                        <input
                          className="form-control"
                          placeholder="Your email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="mb-3 mt-3">
                        <input
                          className="form-control"
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
              <button
              className="btn btn-block btn-primary"
              style={{ cursor: "pointer" }}
              type="submit"
            >
              Submit
            </button>
            </form>
            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;

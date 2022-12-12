import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useQuery } from '@apollo/client';
// import { useMutation } from '@apollo/client';

// import { LOGIN_USER } from '../utils/mutations';

import Auth from "../utils/auth";

const Home = (props) => {
  const [formState, SetFormState] = useState({ email: "", password: "" });
  // const [Login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    SetFormState({
      formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await Home({
        variables: { formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    SetFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main>
      <div class="tab-content">
        <div
          class="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form onSubmit={handleFormSubmit}>
            <div class="form-outline mb-4">
              <input
                onChange={handleChange}
                value={formState.password}
                type="email"
                id="loginName"
                class="form-control"
              />
              <label class="form-label" for="loginName">
                Email
              </label>
            </div>

            <div class="form-outline mb-4">
              <input
                onChange={handleChange}
                value={formState.password}
                type="password"
                id="loginPassword"
                class="form-control"
              />
              <label class="form-label" for="loginPassword">
                Password
              </label>
            </div>

            <div class="row mb-4">
              <div class="col-md-6 d-flex justify-content-center">
                <div class="form-check mb-3 mb-md-0">
                  <input
                    onChange={handleChange}
                    value={formState.password}
                    class="form-check-input"
                    type="checkbox"
                    id="loginCheck"
                    checked
                  />
                  <label class="form-check-label" for="loginCheck">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>

              <div class="col-md-6 d-flex justify-content-center">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-4">
              Sign in
            </button>
          </form>
          <button type="submit" class="btn  btn-block mb-4">
            <Link to="/signup">Signup</Link>
          </button>
        </div>
        <div
          class="tab-pane fade"
          id="pills-register"
          role="tabpanel"
          aria-labelledby="tab-register"
        >
        </div>
      </div>
    </main>
  );
};

export default Home;

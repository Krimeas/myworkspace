import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';

import { LOGIN_USER } from '../utils/mutations';

import Auth from "../utils/auth";

const Home = (props) => {
  const [formState, SetFormState] = useState({ email: "", password: "" });
  const [Login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    SetFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await Login({
        variables: { ...formState },
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
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form onSubmit={handleFormSubmit}>
            <div className="form-outline mb-4">
            <label className="form-label" for="loginName">
                Email
              </label>
              <input
                className="form-control"
                placeholder="Your email"
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <label className="form-label" for="loginPassword">
                Password
              </label>
            <div className="form-outline mb-4">
              <input
                className="form-control"
                placeholder="**"
                type="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign in
            </button>
          </form>
          <button type="submit" className="btn  btn-block mb-4">
            <Link to="/signup">Signup</Link>
          </button>
        </div>
        <div
          className="tab-pane fade"
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

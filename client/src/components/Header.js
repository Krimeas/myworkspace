import React from "react";
// import { Link } from "react-router-dom";

// import Auth from "../utils/auth";

const Header = () => {
  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };

  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align center">
      {/* // <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg bg-light flex-row justify-content-center">
        <div className="container-fluid flex-column align-content-center">
          <a className="navbar-brand" href="/">
            <h1>MyWorkSpace</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container text-center">
            <div className="nav-item">
              <a className="nav-link active" aria-current="page" href="/users/:username/:coworkers">
                CoWorkers
              </a>
            </div>
            <div className="row align-items-center">
              <div className="nav-item">
                <a className="nav-link" href="/projects">
                  Projects
                </a>
              </div>
            </div>
            <div className="row align-items-end">
              <div className="nav-item">
                <a className="nav-link" href="/users/:username">
                  User
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* // <!-- Navbar --> */}
    </header>
  );
};

export default Header;

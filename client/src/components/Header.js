import React from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align center">
      {/* // <!-- Navbar --> */}
      <nav class="navbar navbar-expand-lg bg-light flex-row justify-content-center">
        <div class="container-fluid flex-column align-content-center">
          <a class="navbar-brand" href="/"><h1>MyWorkSpace</h1></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="container text-center">


            <div class="nav-item">

              <a class="nav-link active" aria-current="page" href="/coworkers">CoWorkers</a>

            </div>
            <div class="row align-items-center">
              <div class="nav-item">
                <a class="nav-link" href="/projects">Projects</a>

              </div>
            </div>
            <div class="row align-items-end">
              <div class="nav-item">
                <a class="nav-link" href="/user">User</a>

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

import React from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      {/* // <!-- Navbar --> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <Link to="/">MyWorkSpace</Link>
        </div>
        <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <Link class="nav-item" to="/coworkers">
              Coworkers
            </Link>
            <Link class="nav-item" to="projects">
              Projets
            </Link>
            <Link class="nav-item" to="/user">
              User
            </Link>
          </ul>
        </div>
      </nav>
      {/* // <!-- Navbar --> */}
    </header>
  );
};

export default Header;

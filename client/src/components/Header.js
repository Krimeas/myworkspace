import React from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center justify-space-between-lg">
      {/* // <!-- Navbar --> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <Link to="/">MyWorkSpace</Link>
        </div>
        <div class="navbar-nav me-auto mb-2 mb-lg-0 flex-row justify-space-between-lg">
          <ul >
            <li class="nav-item" >
            <Link to="/coworkers">
              Coworkers
            </Link>
            </li>
            <li class="nav-item" >
            <Link to="/projects">
              Projets
            </Link>
            </li>
            <li class="nav-item" >
            <Link to="/user">
              User
            </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* // <!-- Navbar --> */}
    </header>
  );
};

export default Header;

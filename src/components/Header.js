import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="MainHeader">
      <nav className="navBar">
        <ul className="d-flex ps-0">
          <li>
            <Link to="/Home" className="Sidebarlink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Home" className="Sidebarlink">
              Chat
            </Link>
          </li>
          <li>
            <Link to="/" className="Sidebarlink">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="Sidebarlink">
              Signup
            </Link>
          </li>
        </ul>
      </nav>
      <div className="user-dropdown d-flex justify-content-end">
        <div className="dropdown">
          <button
            className="btn dropdown-btn dropdown-toggle d-flex justify-content-between align-items-center"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            user.username
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <button className="dropdown-item">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <nav className="navBar mt-4">
        <ul className="px-4">
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
    </div>
  );
};

export default Sidebar;

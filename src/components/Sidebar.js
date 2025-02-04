import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-blue-800 text-white w-64 h-screen fixed transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">ChatApp</h2>
          <FaTimes
            className="text-xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <nav className="mt-4">
          <ul className="space-y-4 px-4">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 hover:bg-blue-600 rounded"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/chat"
                className="block py-2 px-3 hover:bg-blue-600 rounded"
              >
                Chat
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block py-2 px-3 hover:bg-blue-600 rounded"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="block py-2 px-3 hover:bg-blue-600 rounded"
              >
                Signup
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        className="fixed top-4 left-4 bg-blue-600 text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars className="text-xl" />
      </button>
    </div>
  );
};

export default Sidebar;

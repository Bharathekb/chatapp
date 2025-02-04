import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Singup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <div className="container">
      <div className="Form-box mt-4 bg-white">
        <h1 className="Heading text-center mb-4">Register</h1>
        <form className="needs-validation" onSubmit={submitHandler}>
          {/* Username */}
          <div className="form-group mb-4">
            <label className="My-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="form-group mb-4">
            <label className="My-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="form-group mb-4">
            <label className="My-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div className="form-group mb-4">
            <label className="My-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmpassword"
            />
          </div>

          {/* Account Link */}
          <div className="mb-4 d-flex justify-content-between Account-box">
            <p className="Para fw-600">Already have an account? </p>
            <Link className="Link fw-600" to="/">
              Login
            </Link>
          </div>

          {/* Submit Button */}
          <div className="w-100">
            <button type="submit" className="btn Submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Singup;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("login with", email, password);
    navigate("/Home");
  };

  return (
    <div className="container">
      <div className="Form-box mt-4 bg-white">
        <h1 className="Heading text-center mb-4">Login</h1>
        <form className="needs-validation" onSubmit={submitHandler}>
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

          {/* Register Link */}
          <div className="mb-4 d-flex justify-content-between Account-box">
            <Link to="/Signup" className="Link fw-600">
              Create account
            </Link>
          </div>

          {/* Submit Button */}
          <div className="w-100">
            <button type="submit" className="btn Submit-btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;

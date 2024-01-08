import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "../src/SignupValidation";
const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [errors, setError] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(Validation(values));
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25 custom-mobile-width">
        <h2>SIGN UP</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="text">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="enter your name"
              className="form-control rounded-0"
              onChange={handleInput}
              name="name"
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="enter your mail"
              className="form-control rounded-0"
              onChange={handleInput}
              name="email"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="enter your password"
              className="form-control rounded-0"
              onChange={handleInput}
              name="password"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            SIGN UP
          </button>
          <p>You agree to our terms and conditions!</p>
          <Link
            to="/"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            LOG IN
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;

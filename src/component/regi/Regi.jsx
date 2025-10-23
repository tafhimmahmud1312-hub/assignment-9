import React from "react";
import { FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router";
import Navbar from "../main/Navbar";

const Regi = () => {
  const handlesubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handlesubmit}>
                <h1 className="text-4xl font-bold">Register now!</h1>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Your name"
                  />
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button type="submit" className="btn btn-neutral mt-4">
                    Register
                  </button>
                  <button className="btn btn-neutral mt-1">
                    <FaGoogle /> Sign up with google
                  </button>

                  <p className="text-lg font-semibold text-left mt-3">
                    already have an account?{" "}
                    <NavLink to="/loginform">
                      <span className="text-blue-600">Login</span>
                    </NavLink>
                  </p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regi;

import React from "react";
import { NavLink } from "react-router";

const Logform = () => {
  return (
    <div>
      <div className=" mb-4 font-bold btn w-full">
        <NavLink className="mr-3 btn-ghost" to="/">
          Home
        </NavLink>
        <NavLink to="/">About</NavLink>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>

                <p className="text-lg text-left mt-3">
                  if you are new, then{" "}
                  <NavLink to="/regi">
                    <span className="text-blue-600">register</span>
                  </NavLink>
                </p>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logform;

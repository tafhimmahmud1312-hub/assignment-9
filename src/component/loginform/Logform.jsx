import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import Navbar from "../main/Navbar";
import { AuthContex } from "../../provider/AuthProvider";

const Logform = () => {
  const { signin } = useContext(AuthContex);
  const location = useLocation();
  const navigate = useNavigate();
  const handlelogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signin(email, password)
      .then(() => {
        // const user = result.user;
        alert("log in succesfully");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorcode = error.code;
        const errormessage = error.message;
        alert(errorcode, errormessage);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div></div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handlelogin}>
                <fieldset className="fieldset">
                  <h1 className="text-5xl font-bold mb-2">Login now!</h1>
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logform;

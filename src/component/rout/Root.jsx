import React from "react";
import Home from "../main/Home";
import Navbar from "../main/Navbar";
import { Outlet } from "react-router";
import Footer from "../../../Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;

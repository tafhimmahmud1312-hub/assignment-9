import React, { use } from "react";
import { AuthContex } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import LoadingDaisi from "../component/main/LoadingDaisi";

const PrivetRout = ({ children }) => {
  const { user, loading } = use(AuthContex);

  const location = useLocation();

  if (loading) {
    return <LoadingDaisi></LoadingDaisi>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/loginform"></Navigate>;
};

export default PrivetRout;

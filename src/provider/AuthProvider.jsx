import React, { createContext, useState } from "react";

export const authcontex = createContext();
const AuthProvider = () => {
  const [user, setuser] = useState({
    name: "habul",
    email: "habul@miya.com",
  });
  const authdata = {
    user,
    setuser,
  };
  return <div></div>;
};

export default AuthProvider;

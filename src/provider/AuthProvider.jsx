import React, { createContext, useEffect, useState } from "react";

import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// export const AuthContex = createContext();
export const AuthContex = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const creatuser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signin = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
      setloading(false);
    });
    return () => {
      unsbscribe();
    };
  }, []);
  const authdata = {
    user,
    setuser,
    creatuser,
    logout,
    signin,
    loading,
    setloading,
  };
  return <AuthContex.Provider value={authdata}>{children}</AuthContex.Provider>;
};

export default AuthProvider;

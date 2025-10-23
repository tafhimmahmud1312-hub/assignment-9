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

  const creatuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
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
  };
  return <AuthContex.Provider value={authdata}>{children}</AuthContex.Provider>;
};

export default AuthProvider;

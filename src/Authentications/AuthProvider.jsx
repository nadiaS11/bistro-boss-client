import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./fiebase.config";
import useAxiosPublic from "./../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const userSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const userInfo = { email: currentUser.email };
        const res = await axiosPublic.post("/jwt", userInfo);
        console.log(res);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          setLoading(false);

          const userRes = await axiosPublic.put("/users", {
            name: currentUser.displayName,
            email: currentUser.email,
            photo: currentUser.photoURL,
          });
          console.log(userRes.data);
        }
      } else {
        localStorage.removeItem("token");
        setLoading(false);
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    userSignUp,
    login,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {};

export default AuthProvider;

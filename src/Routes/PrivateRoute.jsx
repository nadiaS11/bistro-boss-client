import React from "react";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <progress className="progress w-56 "></progress>;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
};

PrivateRoute.propTypes = {};

export default PrivateRoute;

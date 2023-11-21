import React from "react";
import PropTypes from "prop-types";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin();
  if (user && isAdmin) {
    return children;
  }
  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

AdminRoute.propTypes = {};

export default AdminRoute;

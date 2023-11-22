import React from "react";
import PropTypes from "prop-types";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import MyCart from "../pages/dashboard route/MyCart";
import AllUsers from "../pages/dashboard route/AllUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AddItem from "../pages/dashboard route/AddItem";
import Payments from "../pages/dashboard route/Payments";
import UserHome from "../pages/dashboard route/userHome";
import AdminHome from "../pages/dashboard route/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/salad",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "user",
        element: (
          <PrivateRoute>
            <UserHome />
          </PrivateRoute>
        ),
      },
      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "my-cart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <Payments />
          </PrivateRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "add-item",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
    ],
  },
]);

router.propTypes = {};

export default router;

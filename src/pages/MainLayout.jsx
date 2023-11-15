import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Footer from "./../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;

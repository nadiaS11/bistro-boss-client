import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

const useAxios = () => {
  const instance = axios.create({
    baseURL: "http://localhost:5000",
  });
  return instance;
};

useAxios.propTypes = {};

export default useAxios;

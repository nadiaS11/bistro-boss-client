import React from "react";
import PropTypes from "prop-types";
import Banner from "./../components/Banner";
import Category from "./../components/category/Category";
import Popular from "./../components/Popular";
import Featured from "./../components/Featured";

const Home = (props) => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Popular></Popular>
      <Featured></Featured>
    </div>
  );
};

Home.propTypes = {};

export default Home;

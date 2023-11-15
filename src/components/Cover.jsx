import React from "react";
import PropTypes from "prop-types";
import { Parallax } from "react-parallax";

const Cover = ({ img, title, subtitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div
        className="hero h-[700px]"
        // style={{
        //   backgroundImage: `url(${img})`,
        // }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{subtitle}</p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </Parallax>
  );
};

Cover.propTypes = {};

export default Cover;

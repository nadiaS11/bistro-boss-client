import React from "react";
import PropTypes from "prop-types";

const SectionHeading = ({ heading, subheading }) => {
  return (
    <div className="text-center my-10">
      <p
        className="text-sm 
      text-yellow-600 "
      >
        ---{heading}---
      </p>
      <h3 className="uppercase text-4xl my-4 p-3 border-y-4 mx-auto  w-80">
        {subheading}
      </h3>
    </div>
  );
};

SectionHeading.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
};

export default SectionHeading;

import React from "react";
import PropTypes from "prop-types";
import SectionHeading from "./SectionHeading";
import featuredImg from "../assets/home/featured.jpg";

const Featured = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${featuredImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="   bg-fixed text-white"
    >
      <div className="bg-[#151515B2] pt-10 h-full">
        <SectionHeading
          heading={"Check it out"}
          subheading={"From Our Menu"}
        ></SectionHeading>
        <div className="md:flex items-center justify-center gap-16 py-20 px-36">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="space-y-4">
            <p>March 20, 2023 </p>
            <p>WHERE CAN I GET SOME? </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-4 text-white">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Featured.propTypes = {};

export default Featured;

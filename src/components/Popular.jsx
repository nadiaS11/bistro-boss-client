import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SectionHeading from "./SectionHeading";
import MenuCard from "./MenuCard";
import useMenu from "../hooks/useMenu";

const Popular = () => {
  const [menu] = useMenu();
  const popular = menu?.filter((item) => item.category == "popular");

  // const [menu, setMenu] = useState();
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data?.filter((item) => item.category == "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  return (
    <div>
      <SectionHeading
        heading={"Check it out"}
        subheading={"From Our Menu"}
      ></SectionHeading>
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {popular?.map((item) => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

Popular.propTypes = {};
export default Popular;

import React from "react";
import PropTypes from "prop-types";
import MenuCard from "./MenuCard";
import SectionHeading from "./SectionHeading";
import Cover from "./Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img, subtitle }) => {
  return (
    <div>
      {title && img && <Cover title={title} img={img} />}
      <div className="grid md:grid-cols-2 gap-4 space-y-3 my-10">
        {items?.map((item) => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <Link
          to={`/order/${title}`}
          className="my-5   btn btn-outline border-0 border-b-4 "
        >
          Order now
        </Link>
      </div>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array,
};

export default MenuCategory;

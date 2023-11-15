import React from "react";
import PropTypes from "prop-types";
import { TabPanel } from "react-tabs";
import FoodCard from "./FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto px-2">
      {items?.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

OrderTab.propTypes = {
  items: PropTypes.array,
};

export default OrderTab;

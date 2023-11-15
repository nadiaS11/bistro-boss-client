import React from "react";
import PropTypes from "prop-types";

const MenuCard = ({ item }) => {
  const { image, recipe, name, price } = item;

  return (
    <div className="flex gap-4">
      <img
        style={{
          borderRadius: "0 200px 200px 200px",
        }}
        className="w-[120px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="text-xl mb-2">{name} ----------- </h3>
        <p>{recipe}</p>
      </div>
      <div>
        <p className="text-xl text-[#BB8506]">${price}</p>
      </div>
    </div>
  );
};

MenuCard.propTypes = {};

export default MenuCard;

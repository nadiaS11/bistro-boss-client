import React from "react";
import PropTypes from "prop-types";

const FoodCard = ({ item }) => {
  const { name, image, price } = item;
  return (
    <div className="card mt-10 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div
        className="card-body
       flex flex-col items-center text-center"
      >
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline bg-neutral-200 border-0 border-b-4">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {};

export default FoodCard;

import React from "react";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
  const axios = useAxios();
  const { user } = useAuth();
  const [, refetch] = useCart();
  const { _id, name, image, price } = item;
  const handleAddToCurt = async () => {
    if (user && user?.email) {
      try {
        const res = await axios.put(`/cart/${_id}`, {
          ...item,
          email: user.email,
          quantity: 0,
        });

        console.log(res.data);
        if (res.data.upsertedCount > 0) {
          refetch();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please login first");
    }
  };
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
        <p>${price}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddToCurt}
            className="btn btn-outline bg-neutral-200 border-0 border-b-4"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object,
};

export default FoodCard;

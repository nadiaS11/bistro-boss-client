import React from "react";
import PropTypes from "prop-types";
import useCart from "../../hooks/useCart";
import ItemRow from "./dashboard components/ItemRow";

const MyCart = (props) => {
  const [curtItems] = useCart();
  console.log(curtItems);
  let totalPrice = 0;
  for (let items of curtItems) {
    totalPrice += items.price;
  }
  console.log(totalPrice);
  return (
    <div>
      <div className="flex justify-between w-full">
        <h1 className="font-bold text-4xl">Items : {curtItems?.length}</h1>
        <h1 className="font-bold text-4xl">
          Total Price:{totalPrice.toFixed(2)}
        </h1>
      </div>
      <div className="overflow-x-auto mt-14">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Name</th>

              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {curtItems?.map((item, idx) => (
              <ItemRow key={item._id} idx={idx} item={item}></ItemRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

MyCart.propTypes = {};

export default MyCart;

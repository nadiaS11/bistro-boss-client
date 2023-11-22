import React from "react";
import PropTypes from "prop-types";
import useCart from "../../hooks/useCart";
import ItemRow from "./dashboard components/ItemRow";
import { Link } from "react-router-dom";

const MyCart = (props) => {
  const [cart] = useCart();
  console.log(cart);
  let totalPrice = 0;
  for (let items of cart) {
    totalPrice += items.price;
  }
  console.log(totalPrice);
  return (
    <div>
      <div className="flex justify-between w-full">
        <h1 className="font-bold text-4xl">Items : {cart?.length}</h1>
        <h1 className="font-bold text-4xl">
          Total Price:{totalPrice.toFixed(2)}
        </h1>
        <Link to={"/dashboard/payment"} className="btn bg-[#D1A054]">
          Pay
        </Link>
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
            {cart?.map((item, idx) => (
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

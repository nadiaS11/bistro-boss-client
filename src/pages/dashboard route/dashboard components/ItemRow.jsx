import React from "react";
import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxios from "../../../hooks/useAxios";
import useCart from "../../../hooks/useCart";

const ItemRow = ({ item, idx }) => {
  const { _id, image, name, price } = item;
  const [, refetch] = useCart();
  const axios = useAxios();
  const handleDelete = (id) => {
    axios.delete(`/cart/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        refetch();
      }
    });
  };
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt=" " />
            </div>
          </div>
          <div>
            <div className="font-bold"> {name}</div>
          </div>
        </div>
      </td>

      <td>{price}</td>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn  bg-red-700  ">
          <RiDeleteBin6Line size={"1.5rem"} color="white" />
        </button>
      </th>
    </tr>
  );
};

ItemRow.propTypes = {
  item: PropTypes.object,
};

export default ItemRow;

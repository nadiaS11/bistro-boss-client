import React from "react";
import PropTypes from "prop-types";
import SectionHeading from "./../../components/SectionHeading";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxios from "../../hooks/useAxios";
const image_key = import.meta.env.VITE_iMAGE_KEY;
const image_api = `https://api.imgbb.com/1/upload?key=${image_key}`;
const AddItem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxios();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_api, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });
    console.log(res.data, res.data.data.display_url);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
        recipe: data.recipe,
      };
      console.log(menuItem);
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        console.log("added item successfully");
      }
    }
  };
  return (
    <div>
      <SectionHeading
        heading={"What's new?"}
        subheading={"Add An Item"}
      ></SectionHeading>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mx-auto max-w-2xl"
        >
          <div className=" ">
            <label className="label">
              <span className="label-text">Recipe name?</span>
            </label>
            <input
              {...register("name", { required: true })}
              className="input input-bordered w-full  "
            />
          </div>
          <div className=" flex items-center justify-between gap-5">
            <div className="w-full">
              {" "}
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full max-w-xl"
              >
                <option disabled value={"default"}>
                  Select Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("price", { required: true })}
                className="input input-bordered w-full max-w-xs"
                placeholder="$$$"
              />
            </div>
          </div>
          <div className=" ">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>

            <textarea
              name=" "
              id=""
              cols="30"
              rows="5"
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
          </div>
          <div>
            <input
              type="file"
              className="file-input w-full max-w-xs"
              {...register("image", { required: true })}
            />
          </div>
          <div>
            <input
              style={{
                background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
              }}
              type="submit"
              value="Add Item"
              className="btn w-40 my-4 text-white font-semibold"
            />{" "}
            <FaUtensils className="inline-block -ml-8" />
          </div>
        </form>
      </div>
    </div>
  );
};

AddItem.propTypes = {};

export default AddItem;

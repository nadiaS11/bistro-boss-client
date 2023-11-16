import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import useCart from "../hooks/useCart";

const Navbar = () => {
  const axios = useAxios();
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    try {
      logOut();
    } catch (err) {
      console.log(err);
    }
  };
  const [curtItems] = useCart();

  console.log(curtItems);
  const navlist = (
    <>
      <li>
        <Link>Home</Link>
      </li>

      <li>
        <Link to={"/menu"}>Our Menu</Link>
      </li>
      <li>
        <Link to={"/order"}>Order</Link>
      </li>
      <li>
        {user ? (
          <Link onClick={handleLogOut}>Log out</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-70 bg-[#15151580] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#15151580] rounded-box w-52"
          >
            {navlist}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlist}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-ghost">
          <FaShoppingCart color="red" size={"2em"} />
          <sup className="badge btn-xs badge-neutral ">{curtItems.length}</sup>
        </Link>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;

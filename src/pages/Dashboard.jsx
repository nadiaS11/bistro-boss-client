import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineDoubleRight } from "react-icons/ai";
import {
  FaHome,
  FaCalendarAlt,
  FaShoppingCart,
  FaCalendarCheck,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import { MdPayment, MdPayments, MdRateReview } from "react-icons/md";

import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  // TODO: get admin from database
  const [isAdmin] = useAdmin();
  const [open, setOpen] = useState(true);
  return (
    <div className="min-h-screen min-w-full flex     ">
      <div className="z-20">
        {!open ? (
          <AiOutlineDoubleRight
            onClick={() => setOpen(!open)}
            className={`my-5  w-6 h-10    ${
              open ? "hidden" : ""
            } lg:hidden rounded-full rounded-l-none border-[#D1A054] p-1  border-2 border-l-0`}
          />
        ) : (
          <div
            className={`absolute   ${
              open ? "left-0  " : "-left-80"
            } lg:left-0 lg:flex h-screen w-72 flex-col overflow-hidden rounded-r-2xl   bg-[#D1A054] text-black`}
          >
            <h1 className="mt-10 ml-10 text-3xl font-bold">Bistro Boss</h1>
            <ul
              onClick={() => setOpen(!open)}
              className="mt-20 space-y-3 font-medium "
            >
              {isAdmin ? (
                <>
                  {" "}
                  <NavLink
                    to={"/dashboard"}
                    className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-black hover:bg-[#be8938]"
                  >
                    <span>
                      <FaHome size={"1.5rem"} />
                    </span>
                    <span className="">Admin Home</span>
                  </NavLink>
                  <NavLink
                    to={"/dashboard/add-item"}
                    className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10   hover:bg-[#be8938]"
                  >
                    <FaUtensils size={"1.5rem"} />
                    <span className="">Add Item</span>
                  </NavLink>
                  <NavLink
                    to={"/dashboard/my-cart"}
                    className={({ isActive }) =>
                      isActive
                        ? "relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-black hover:bg-[#be8938] bg-[#c2852a]"
                        : "relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-black hover:bg-[#be8938]"
                    }
                  >
                    <span>
                      <FaBook size={"1.5rem"} />
                    </span>
                    <span className="">Manage Bookings</span>
                  </NavLink>
                  <NavLink
                    to={"/dashboard/users"}
                    className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-black hover:bg-[#be8938]"
                  >
                    <span className="text-2xl">
                      <FaUsers size={"1.5rem"} />
                    </span>
                    <span className="">All Users</span>
                  </NavLink>
                  <NavLink className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-black hover:bg-[#be8938]">
                    <span>
                      <MdRateReview size={"1.5rem"} />
                    </span>
                    <span className="">Add Review</span>
                  </NavLink>
                  <NavLink className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-black hover:bg-[#be8938]">
                    <span>
                      <FaCalendarCheck size={"1.5rem"} />
                    </span>
                    <span className="">My Booking</span>
                  </NavLink>
                </>
              ) : (
                <>
                  {" "}
                  <NavLink className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-black hover:bg-[#be8938]">
                    <span>
                      {" "}
                      <FaHome size={"1.5rem"} />
                    </span>
                    <span className="">User Home</span>
                  </NavLink>
                  <NavLink className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10   hover:bg-[#be8938]">
                    <FaCalendarAlt size={"1.5rem"} />
                    <span className="">Reservation</span>
                  </NavLink>
                  <NavLink
                    to={"/dashboard/my-cart"}
                    className={({ isActive }) =>
                      isActive
                        ? "relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-black hover:bg-[#be8938] bg-[#c2852a]"
                        : "relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-black hover:bg-[#be8938]"
                    }
                  >
                    <span>
                      <FaShoppingCart size={"1.5rem"} />
                    </span>
                    <span className="">My Cart</span>
                  </NavLink>
                  <NavLink className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-black hover:bg-[#be8938]">
                    <span className="text-2xl">
                      <MdPayments size={"1.5rem"} />
                    </span>
                    <span className="">Payments</span>
                  </NavLink>
                  <NavLink className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-black hover:bg-[#be8938]">
                    <span>
                      <MdRateReview size={"1.5rem"} />
                    </span>
                    <span className="">Add Review</span>
                  </NavLink>
                  <NavLink className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-black hover:bg-[#be8938]">
                    <span>
                      <FaCalendarCheck size={"1.5rem"} />
                    </span>
                    <span className="">My Booking</span>
                  </NavLink>
                </>
              )}
            </ul>

            <hr className="w-[90%] mx-auto my-10" />
            <ul className=" space-y-3   font-medium">
              <NavLink
                to={"/"}
                className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-black hover:bg-[#be8938]"
              >
                <span>
                  <FaHome size={"1.5rem"} />
                </span>
                <span className=""> Home</span>
              </NavLink>
              <NavLink className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10   hover:bg-[#be8938]">
                <span>
                  <FaCalendarAlt size={"1.5rem"} />
                </span>
                <span className="">Reservation</span>
              </NavLink>
              <NavLink className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-black hover:bg-[#be8938]">
                <span>
                  <FaShoppingCart />
                </span>
                <span className="">My Cart</span>
              </NavLink>
              <NavLink className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-black hover:bg-[#be8938]">
                <span className="text-2xl">
                  <MdPayment size={"1.5rem"} />
                </span>
                <span className="">Payments</span>
              </NavLink>
              <NavLink className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-black hover:bg-[#be8938]">
                <span>
                  <MdRateReview size={"1.5rem"} />
                </span>
                <span className="">Add Review</span>
              </NavLink>
              <NavLink className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-black hover:bg-[#be8938]">
                <span>
                  <FaCalendarCheck size={"1.5rem"} />
                </span>
                <span className="">My Booking</span>
              </NavLink>
            </ul>

            <div className="my-6 mt-auto ml-10 flex cursor-pointer">
              <div>
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                />
              </div>
              <div className="ml-3">
                <p className="font-medium">Palmer</p>
                <p className="text-sm text-black">Kiev, Ukraine</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex-grow mt-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;

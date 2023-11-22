import React from "react";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";

const AdminHome = (props) => {
  const { user } = useAuth;
  const axiosSecure = useAxios();
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl my-10">
        <span>Hi, Welcome</span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${stats.revenue}</div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Customers</div>
          <div className="stat-value text-secondary">{stats.users}</div>
          {/* <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Items</div>
          <div className="stat-value">{stats.menuItems}</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.orders}</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
      </div>
    </div>
  );
};

AdminHome.propTypes = {};

export default AdminHome;

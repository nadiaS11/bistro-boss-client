import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${user?.email}`);
      console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

useAdmin.propTypes = {};

export default useAdmin;

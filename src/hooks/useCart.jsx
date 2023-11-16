import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useCart = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const { data: curtItems = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/cart?email=${user?.email}`);
      return res.data;
    },
  });
  return [curtItems, refetch];
};

useCart.propTypes = {};

export default useCart;

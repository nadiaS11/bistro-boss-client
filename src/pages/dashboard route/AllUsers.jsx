import React from "react";
import PropTypes from "prop-types";
import {
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import ItemRow from "./dashboard components/ItemRow";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxios();
  const queryClient = useQueryClient();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const { mutate } = useMutation({
    mutationKey: ["user"],
    mutationFn: (id) => {
      return axiosSecure.delete(`/users/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        console.log(" patched admin role");
      }
    });
  };

  return (
    <div className="min-w-[50%] mx-auto bg-gray-50 min-h-full">
      <h1 className="font-bold text-4xl">Total Users: {users.length} </h1>
      <div className="overflow-x-auto mt-14">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>

              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar"></div>
                    <div>
                      <div className="font-bold"> {user?.name}</div>
                    </div>
                  </div>
                </td>

                <td>{user?.email}</td>
                <th>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn  bg-red-700  "
                    >
                      <FaUsers size={"1.5rem"} color="white" />
                    </button>
                  )}
                </th>
                <th>
                  <button
                    onClick={() => mutate(user?._id)}
                    className="btn  bg-red-700  "
                  >
                    <RiDeleteBin6Line size={"1.5rem"} color="white" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

AllUsers.propTypes = {};

export default AllUsers;

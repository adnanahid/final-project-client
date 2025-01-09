import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../CustomHook/useAxiosSecure";
import { FaTrash, FaUserShield } from "react-icons/fa";
import toast from "react-hot-toast";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  // Fetching users with React Query
  const {
    data: users = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = async (user) => {
    try {
      const res = await axiosSecure.patch(`/users/admin/${user._id}`);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`${user.name} is now an Admin!`);
      }
    } catch (err) {
      toast.error("Failed to make user an admin.");
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axiosSecure
        .delete(`/user/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            toast.success("User deleted successfully");
            refetch();
          }
        })
        .catch((err) => {
          toast.error("Failed to delete user.");
          console.error("Error deleting user:", err);
        });
    }
  };

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error loading users: {error.message}</div>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* Ensure users is always an array */}
            {(users || []).map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={
                            user.displayImage ||
                            "https://via.placeholder.com/150"
                          }
                          alt={`${user.name}'s Avatar`}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">
                        {user.location || "N/A"}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role || "User"}</td>
                <th>
                  {user.role !== "Admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-primary btn-xs"
                    >
                      <FaUserShield /> Make Admin
                    </button>
                  )}
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-error btn-xs"
                  >
                    <FaTrash /> Delete
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

export default AllUsers;

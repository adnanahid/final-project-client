import React, { useState } from "react";
import SectionTitle from "../../SharedComponent/SectionTitle";
import useMenu from "../../CustomHook/useMenu";
import toast from "react-hot-toast";
import useAxiosSecure from "../../CustomHook/useAxiosSecure";
import { FaPen, FaTrash } from "react-icons/fa";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const [deleteItemId, setDeleteItemId] = useState(null);

  // Confirm Delete Function
  const confirmDelete = () => {
    if (deleteItemId) {
      axiosSecure
        .delete(`http://localhost:5000/menu/${deleteItemId}`)
        .then((response) => {
          if (response.data.deletedCount > 0) {
            toast.success("Item deleted successfully");
            refetch();
            setDeleteItemId(null);
          } else {
            toast.error("Failed to delete item");
          }
        })
        .catch((error) => {
          toast.error("An error occurred. Please try again.");
          console.error("Delete error:", error);
        });
    }
  };

  return (
    <div>
      <SectionTitle
        title={"Manage All Items"}
        subTitle={"Hurry up"}
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* Table Head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {menu.map((item, index) => (
                <tr key={item.id || index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>${item.price}</td>
                  <td>
                    <button className="btn btn-ghost btn-xs text-blue-500">
                      <FaPen />
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs text-red-500"
                      onClick={() => setDeleteItemId(item._id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteItemId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-5 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">
              Are you sure you want to delete this item?
            </h3>
            <div className="flex gap-3 mt-4">
              <button
                className="btn btn-error btn-sm"
                onClick={confirmDelete}
              >
                Yes, Delete
              </button>
              <button
                className="btn btn-outline btn-sm"
                onClick={() => setDeleteItemId(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageItems;

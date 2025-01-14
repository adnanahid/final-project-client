import React from "react";
import useCart from "../../CustomHook/useCart";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handleDelete = (id) => {
    toast.custom(
      (t) => (
        <div
          className={`p-4 bg-white shadow-md rounded-lg ${
            t.visible ? "animate-enter" : "animate-leave"
          }`}
        >
          <p className="text-lg font-semibold mb-4">
            Are you sure you want to delete this item?
          </p>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => {
                axios
                  .delete(`http://localhost:5000/cart/${id}`) // Correct endpoint formatting
                  .then((res) => {
                    if (res.data.deletedCount > 0) {
                      toast.success("Deleted successfully");
                      refetch(); // Refetch cart data
                      toast.dismiss(t.id); // Dismiss the confirmation toast
                    }
                  })
                  .catch((error) => {
                    console.error("Error deleting item:", error);
                    toast.error("Failed to delete the item");
                  });
              }}
              className="btn btn-error btn-sm"
            >
              Yes
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="btn btn-secondary btn-sm"
            >
              No
            </button>
          </div>
        </div>
      ),
      { id: `delete-toast-${id}`, duration: 10000 } // Custom duration
    );
  };

  return (
    <div className="w-full min-h-screen mt-24">
      {/* Header Section */}
      <div className="flex items-center justify-around w-full mb-6">
        <h2 className="text-4xl font-bold">Total Order: {cart.length}</h2>
        <h2 className="text-4xl font-bold">
          Total Price: ${totalPrice.toFixed(2)}
        </h2>
        <button
          disabled={!cart.length}
          className="btn w-24 text-lg bg-gray-800 text-white"
        >
          <Link to="/dashboard/payment">Pay</Link>
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="table table-zebra md:w-10/12 mx-auto">
          {/* Table Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-error btn-xs"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;

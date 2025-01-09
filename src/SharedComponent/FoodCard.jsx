import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import useCart from "../CustomHook/useCart";
import useAxiosSecure from "../CustomHook/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleCart = (item) => {
    if (user && user?.email) {
      const cartItem = {
        menuId: item._id,
        email: user.email,
        name: item.name,
        image: item.image,
        price: item.price,
      };
      axiosSecure
        .post("/carts", cartItem)
        .then(() => {
          toast.success(`${item.name} is successfully added to your cart`);
          refetch(); // Call refetch after successful post
        })
        .catch(() => {
          toast.error("Failed to add item to cart");
        });
    }
  };

  return (
    <div
      key={item._id}
      className="card card-compact bg-base-100 w-96 shadow-xl mb-6 text-center"
    >
      <figure>
        <img src={item.image} alt={item._id} />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold">{item.name}</h2>
        <p>{item.recipe}</p>
        <p className="absolute text-lg top-5 right-5 bg-slate-900 text-white px-4 rounded-3xl">
          {item.price}$
        </p>
        <button
          onClick={() => handleCart(item)}
          className="btn bg-red-500 text-white bg-transparent border-0 border-b-4 border-r-4 border-black"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;

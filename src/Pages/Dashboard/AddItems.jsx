import React from "react";
import SectionTitle from "../../SharedComponent/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../CustomHook/useAxiosPublic";
import useAxiosSecure from "../../CustomHook/useAxiosSecure";
import toast from "react-hot-toast";

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm(); // Added `reset`
  const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
  const image_hosting_URL = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      // Upload the image
      const imageResponse = await axiosPublic.post(
        image_hosting_URL,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (imageResponse.data.success) {
        const imageUrl = imageResponse.data.data.display_url;

        // Prepare the menu item payload
        const menuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image: imageUrl,
        };

        // Add the menu item to the database
        const menuResponse = await axiosSecure.post("/menu", menuItem);

        if (menuResponse.data.insertedId) {
          reset(); // Reset the form after successful submission
          toast.success(`${data.name} has been added to the menu.`);
        } else {
          toast.error("Failed to add the item to the menu.");
        }
      } else {
        toast.error("Image upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error("An error occurred while adding the item.");
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <SectionTitle title={"Add an Item"} subTitle={"What's new"} />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: "Recipe name is required" })}
              className="input input-bordered w-full"
            />
          </div>

          {/* Category & Price */}
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: "Category is required" })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", {
                  required: "Price is required",
                  validate: (value) =>
                    value > 0 || "Price must be a positive number",
                })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Recipe Details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Details"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Upload Image*</span>
            </label>
            <input
              {...register("image", { required: "Image is required" })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          {/* Submit Button */}
          <button className="btn" type="submit">
            Add Item <FaUtensils className="ml-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;

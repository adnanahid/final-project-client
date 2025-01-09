import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import loginAnimation from "../assets/LottieAnimation/LoginAnimation - 1735711505719.json";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { axiosPublic } from "../CustomHook/useAxiosPublic";
const SignUpPage = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUserProfile(data.name, data.photoURL).then(() => {
          const userInfo = { name: data.name, email: data.email };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added");
            }
          });
        });
        setUser(user);
        toast.success(`Welcome, ${data.name}! Your account has been created.`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    console.log(data);
    reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white w-full max-w-4xl rounded-lg p-6 flex">
        {/* Left Side Image */}
        <div className="w-1/2 md:flex hidden justify-center items-center">
          <Lottie animationData={loginAnimation}></Lottie>
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2 px-8">
          <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-600"
              >
                Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-600"
              >
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Photo URL Input */}
            <div>
              <label
                htmlFor="photoURL"
                className="block text-sm font-semibold text-gray-600"
              >
                Photo URL
              </label>
              <input
                {...register("photoURL")}
                type="text"
                id="photoURL"
                placeholder="Enter your photo URL"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 text-white font-semibold bg-yellow-500 hover:bg-yellow-600 rounded-lg"
            >
              Sign Up
            </button>
          </form>
          <p className="my-2">
            <Link to="/login" className="text-blue-500 underline">
              Already have an account?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

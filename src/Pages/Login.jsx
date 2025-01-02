import React, { useContext, useEffect } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../Provider/AuthProvider";
import Lottie from "lottie-react";
import loginAnimation from "../assets/LottieAnimation/LoginAnimation - 1735711505719.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser, googleLogin, createUser } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const userCaptchaValue = event.target.captcha.value;

    if (validateCaptcha(userCaptchaValue)) {
      createUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setUser(user);
          toast.success("login Successful");
          navigate(location?.state ? location.state : "/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          toast.error(errorMessage);
        });
    } else {
      toast.error("Captcha Does Not Match");
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        toast.success("successful login");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error);
      });
  };

  return (
    <div className="rounded-lg flex  justify-center items-center max-w-screen-md h-screen mx-auto">
      {/* Left Section */}
      <div className="w-1/2 hidden lg:flex justify-center items-center">
        <Lottie animationData={loginAnimation} loop={true}></Lottie>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Type here"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Captcha */}
          <div className="mb-4">
            <label htmlFor="captcha" className="block text-gray-700">
              Captcha
            </label>
            <div className="w-full font-bold text-gray-600 bg-gray-200 px-3 py-2 rounded">
              <LoadCanvasTemplate />
            </div>
            <input
              type="text"
              id="captcha"
              name="captcha"
              placeholder="Type here"
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Sign In Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Footer Links */}
        <div className="text-center text-sm">
          <p className="mb-2">
            New here?{" "}
            <Link to="/registration" className="text-blue-500 underline">
              Create a New Account
            </Link>
          </p>
          <p>Or sign in with</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none"
            >
              {/* Replace with an icon if needed */}
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

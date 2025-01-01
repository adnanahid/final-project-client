import React, { useContext, useEffect } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { user, setUser, googleLogin } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const userCaptchaValue = event.target.captcha.value;

    if (validateCaptcha(userCaptchaValue)) {
      alert("Captcha Matched");
      // Proceed with form submission logic
      console.log("Email:", email);
      console.log("Password:", password);
    } else {
      alert("Captcha Does Not Match");
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex w-11/12 md:w-3/4 lg:w-2/3">
        {/* Left Section */}
        <div className="w-1/2 hidden lg:flex justify-center items-center">
          <img
            src="your-illustration-image-url" // Replace with your illustration image URL
            alt="Cafe Illustration"
            className="w-4/5"
          />
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
              <a href="/signup" className="text-blue-500 underline">
                Create a New Account
              </a>
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
    </div>
  );
};

export default Login;

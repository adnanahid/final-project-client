import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);

  const handleLogout = () => {
    userLogout();
    toast.success("signout successful");
  };

  return (
    <div className="navbar z-10 fixed bg-black opacity-50 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="text-gray-900 menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 w-52 p-2 shadow"
          >
            {user ? (
              <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/menu">Our Menu</NavLink>
                <NavLink to="/ourShop/dessert">Our Shop</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/menu">Our Menu</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/registration">SignUP</NavLink>
              </>
            )}
          </div>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal">
          <div className="space-x-5">
            {user ? (
              <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/menu">Our Menu</NavLink>
                <NavLink to="/ourShop/dessert">Our Shop</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/menu">Our Menu</NavLink>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center justify-center gap-5">
            <button onClick={handleLogout}>Logout</button>
            <div className="avatar w-12">
              <img className="rounded-full" referrerPolicy="no-referrer" src={user?.photoURL} />
            </div>
          </div>
        ) : (
          <div className="space-x-2">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/registration">SignUp</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

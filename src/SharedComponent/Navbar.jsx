import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <div className="space-x-5">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/menu">Our Menu</NavLink>
      <NavLink to="/ourShop/dessert">Our Shop</NavLink>
    </div>
  );
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </div>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal">{navOptions}</div>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
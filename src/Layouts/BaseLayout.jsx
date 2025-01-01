import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../SharedComponent/Navbar";
import Footer from "../SharedComponent/Footer";

const BaseLayout = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default BaseLayout;

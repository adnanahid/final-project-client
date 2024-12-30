import React, { useEffect, useState } from "react";
import SectionTitle from "../SharedComponent/SectionTitle";
import MenuItem from "../SharedComponent/MenuItem";
import useMenu from "../CustomHook/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div>
      <SectionTitle
        title={"From Our Menu"}
        subTitle={"Check it out"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto gap-5 my-12">
        {popular.map((menuItem) => (
          <MenuItem key={menuItem._id} item={menuItem}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;

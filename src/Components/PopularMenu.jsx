import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import axios from "axios";
import MenuItem from "./MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios
      .get("menu.json")
      .then((response) =>
        setMenu(response.data.filter((item) => item.category === "popular"))
      );
  }, []);

  return (
    <div>
      <SectionTitle
        title={"From Our Menu"}
        subTitle={"Check it out"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto gap-5 my-12">
        {menu.map((menuItem) => (
          <MenuItem key={menuItem._id} item={menuItem}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;

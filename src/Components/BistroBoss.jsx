import React from "react";
import chefService from "../assets/home/chef-service.jpg";
import Cover from "../SharedComponent/Cover";

const BistroBoss = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <Cover
        img={chefService}
        title={"Bistro Boss"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officia praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        }
      ></Cover>
    </div>
  );
};

export default BistroBoss;

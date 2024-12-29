import React from "react";
import featuredImg from "../assets/home/featured.jpg";
import SectionTitle from "./SectionTitle";
const FromOurMenu = () => {
  return (
    <div
      className="relative my-16 w-full md:h-[800px] bg-fixed"
      style={{
        backgroundImage: `url(${featuredImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

      }}
    >
      {/* <img src={featuredImg} alt="" className=object-cover" /> */}
      <div className="absolute inset-0 bg-black bg-opacity-50 py-36 text-white">
        <SectionTitle
          subTitle={"check it out"}
          title={"From Our Menu"}
        ></SectionTitle>
        <div className="flex items-center justify-center md:w-8/12 mx-auto mt-12 gap-10">
          <img src={featuredImg} alt="" className="w-1/2 rounded-xl" />
          <div className="w-1/2 space-y-5">
            <h1 className="text-2xl font-semibold">
              March 20, 2023 WHERE <br /> CAN I GET SOME?
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="border-b-2  border-white px-4 py-2 rounded-xl ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromOurMenu;

import React from "react";

const Cover = ({ img, title, description }) => {
  return (
    <div
      className="relative mb-16 max-w-full mx-auto bg-fixed h-[500px] w-full object-cover"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center md:w-8/12 mx-auto h-[300px] mt-28 bg-black bg-opacity-50 rounded-xl">
        <div className="text-center px-8 py-6 max-w-2xl rounded-lg shadow-lg text-white">
          <h1 className="text-7xl font-bold mb-4">{title}</h1>
          <p className="text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;

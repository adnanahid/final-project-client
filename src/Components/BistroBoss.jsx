import React from "react";
import chefService from "../assets/home/chef-service.jpg";

const BistroBoss = () => {
  return (
    <div
      className="relative my-16 max-w-screen-xl mx-auto bg-fixed w-full h-[400px] object-cover rounded-2xl"
      style={{
        backgroundImage: `url(${chefService})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white text-center px-8 py-6 max-w-2xl rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Bistro Boss</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officia praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BistroBoss;

import React from "react";

const MyProfile = () => {
  return (
    <div class="relative flex items-center justify-around h-[400px] px-10">
      <div class="max-w-md space-y-4">
        <h1 class="text-4xl font-bold leading-tight">
          Hello, my name is <br />
          <span class="text-yellow-500">Madelyn Torff</span>
        </h1>
        <p class="text-gray-600">
          Short text with details about you, what you do, or your professional
          career. You can add more information on the about page.
        </p>
        <div class="space-x-4">
          <button class="px-4 py-2 text-white bg-yellow-500 rounded-md">
            Projects
          </button>
          <button class="px-4 py-2 border border-gray-500 rounded-md">
            LinkedIn
          </button>
        </div>
      </div>

      <div class="relative">
        <div class="absolute inset-0 w-full h-full bg-yellow-400 clip-path-custom"></div>
        <img
          src="https://via.placeholder.com/300"
          alt="Profile"
          class="relative z-10 w-72 rounded-full"
        />
      </div>
    </div>
  );
};

export default MyProfile;

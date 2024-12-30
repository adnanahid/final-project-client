import React from "react";

const SectionTitle = ({ subTitle, title }) => {
  return (
    <div className="text-center">
      <h1 className="text-lg italic">{subTitle}</h1>
      <hr className="w-96 mx-auto" />
      <h3 className="text-4xl font-bold">{title}</h3>
      <hr className="w-96 mx-auto" />
    </div>
  );
};

export default SectionTitle;

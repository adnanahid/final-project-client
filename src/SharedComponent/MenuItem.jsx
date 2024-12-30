import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex gap-5">
      <img className="w-[100px] h-[85px] rounded-tr-full rounded-br-full rounded-bl-full" src={image} alt="" />
      <div>
        <h3 className="uppercase">{name}----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-300">{price}</p>
    </div>
  );
};

export default MenuItem;

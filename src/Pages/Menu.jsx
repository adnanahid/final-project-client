import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Cover from "../SharedComponent/Cover";
import MenuCategory from "../SharedComponent/MenuCategory";
import SectionTitle from "../SharedComponent/SectionTitle";

// Images
import menuImg from "../assets/menu/banner3.jpg";
import chefService from "../assets/home/chef-service.jpg";
import dessert from "../assets/menu/pizza-bg.jpg";
import pizza from "../assets/menu/dessert-bg.jpeg";
import salad from "../assets/menu/salad-bg.jpg";
import soup from "../assets/menu/soup-bg.jpg";

const menuSections = [
  { title: "Dessert", img: dessert, category: "dessert" },
  { title: "Pizza", img: pizza, category: "pizza" },
  { title: "Salad", img: salad, category: "salad" },
  { title: "Drinks", img: chefService, category: "drinks" },
  { title: "Soup", img: soup, category: "soup" },
];

const Menu = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      {/* Banner Section */}
      <Cover
        img={menuImg}
        title="Our Menu"
        description="Would you like to try our delicious dishes?"
      />

      {/* Today's Offer Section */}
      <SectionTitle title="Today's Offer" subTitle="Don't miss" />
      <MenuCategory category="offered" />
      <div className="text-center mb-12">
        <Link
          to="/ourShop/dessert"
          className="btn bg-gray-600 text-white bg-transparent border-0 border-b-4 border-r-4 border-black"
        >
          Order Your Favorite Food
        </Link>
      </div>

      {/* Dynamic Menu Sections */}
      {menuSections.map((section, index) => (
        <div key={index}>
          <Cover
            img={section.img}
            title={section.title}
            description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          <MenuCategory category={section.category} />
          <div className="text-center mb-12">
            <Link
              to={`/ourShop/${section.category}`}
              className="btn bg-gray-600 text-white bg-transparent border-0 border-b-4 border-r-4 border-black"
            >
              Order Your Favorite Food
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;

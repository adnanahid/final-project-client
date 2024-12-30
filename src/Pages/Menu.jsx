import React from "react";
import { Helmet } from "react-helmet-async";
import menuImg from "../assets/menu/banner3.jpg";
import Cover from "../SharedComponent/Cover";
import MenuCategory from "../SharedComponent/MenuCategory";
import SectionTitle from "../SharedComponent/SectionTitle";
import chefService from "../assets/home/chef-service.jpg";
import dessert from "../assets/menu/pizza-bg.jpg";
import pizza from "../assets/menu/dessert-bg.jpeg";
import salad from "../assets/menu/salad-bg.jpg";
import soup from "../assets/menu/soup-bg.jpg";

const Menu = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      {/* banner section*/}
      <Cover
        img={menuImg}
        title={"Our Menu"}
        description={"Would you like to try Dish?"}
      ></Cover>

      {/* todays offer section */}
      <SectionTitle
        title={`Today's Offer`}
        subTitle={`Don't miss`}
      ></SectionTitle>
      <MenuCategory category={"offered"}></MenuCategory>

      {/* dessert section */}
      <Cover
        img={dessert}
        title={"Dessert"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory category={"dessert"}></MenuCategory>

      {/* Pizza section */}
      <Cover
        img={pizza}
        title={"Pizza"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory category={"pizza"}></MenuCategory>

      {/* salad section */}
      <Cover
        img={salad}
        title={"Salad"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory category={"salad"}></MenuCategory>

      {/* drinks section */}
      <Cover
        img={chefService}
        title={"Drinks"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory category={"drinks"}></MenuCategory>

      {/* soup section */}
      <Cover
        img={soup}
        title={"Soup"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <MenuCategory category={"soup"}></MenuCategory>


    </div>
  );
};

export default Menu;

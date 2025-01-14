import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import orderBanner from "../assets/shop/banner2.jpg";
import Cover from "../SharedComponent/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../CustomHook/useMenu";
import { useParams } from "react-router-dom";
import FoodCard from "../SharedComponent/FoodCard";

const OurShop = () => {
  const [menu, _, loading] = useMenu([]);
  const { category } = useParams();
  const categories = ["dessert", "pizza", "salad", "soup", "drinks"];
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div className="">
      <Helmet>
        <title>Bistro Boss | ourShop</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      {/* banner section*/}
      <Cover
        img={orderBanner}
        title={"Our Menu"}
        description={"Would you like to try Dish?"}
      ></Cover>

      <div className="text-center my-24">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="mb-12">
            <TabList>
              <Tab>DESSERT</Tab>
              <Tab>PIZZA</Tab>
              <Tab>SALAD</Tab>
              <Tab>SOUP</Tab>
              <Tab>DRINKS</Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 relative">
              {dessert.map((item, idx) => (
                <FoodCard key={idx} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 relative">
              {pizza.map((item, idx) => (
                <FoodCard key={idx} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 relative">
              {salad.map((item, idx) => (
                <FoodCard key={idx} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 relative">
              {soup.map((item, idx) => (
                <FoodCard key={idx} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 relative">
              {drinks.map((item, idx) => (
                <FoodCard key={idx} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;

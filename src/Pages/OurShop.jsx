import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import orderBanner from "../assets/shop/banner2.jpg";
import Cover from "../SharedComponent/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../CustomHook/useMenu";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const [menu, loading] = useMenu([]);
  const { category } = useParams();
  const categories = ["dessert", "pizza", "salad", "soup", "drinks"];
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);

  if (loading) {
    return (
      <div className="min-h-screenflex items-center justify-center">
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
              {dessert.map((item) => (
                <div
                  key={item._id}
                  className="card card-compact bg-base-100 w-96 shadow-xl mb-6 text-center"
                >
                  <figure>
                    <img src={item.image} alt={item._id} />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-2xl font-bold">{item.name}</h2>
                    <p>{item.recipe}</p>
                    <p className="absolute text-lg top-5 right-5 bg-slate-900 text-white px-4 rounded-3xl">
                      {item.price}$
                    </p>
                    <button className="btn bg-blue-500 text-white bg-transparent border-0 border-b-4 border-r-4 border-black">
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 relative">
              {pizza.map((item) => (
                <div
                  key={item._id}
                  className="card card-compact bg-base-100 w-96 shadow-xl mb-6 text-center"
                >
                  <figure>
                    <img src={item.image} alt={item._id} />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-2xl font-bold">{item.name}</h2>
                    <p>{item.recipe}</p>
                    <p className="absolute text-lg top-5 right-5 bg-slate-900 text-white px-4 rounded-3xl">
                      {item.price}$
                    </p>
                    <button className="btn bg-blue-500 text-white bg-transparent border-0 border-b-4 border-r-4 border-black">
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 relative">
              {salad.map((item) => (
                <div
                  key={item._id}
                  className="card card-compact bg-base-100 w-96 shadow-xl mb-6 text-center"
                >
                  <figure>
                    <img src={item.image} alt={item._id} />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-2xl font-bold">{item.name}</h2>
                    <p>{item.recipe}</p>
                    <p className="absolute text-lg top-5 right-5 bg-slate-900 text-white px-4 rounded-3xl">
                      {item.price}$
                    </p>
                    <button className="btn bg-blue-500 text-white bg-transparent border-0 border-b-4 border-r-4 border-black">
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 relative">
              {soup.map((item) => (
                <div
                  key={item._id}
                  className="card card-compact bg-base-100 w-96 shadow-xl mb-6 text-center"
                >
                  <figure>
                    <img src={item.image} alt={item._id} />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-2xl font-bold">{item.name}</h2>
                    <p>{item.recipe}</p>
                    <p className="absolute text-lg top-5 right-5 bg-slate-900 text-white px-4 rounded-3xl">
                      {item.price}$
                    </p>
                    <button className="btn bg-blue-500 text-white bg-transparent border-0 border-b-4 border-r-4 border-black">
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 relative">
              {drinks.map((item) => (
                <div
                  key={item._id}
                  className="card card-compact bg-base-100 w-96 shadow-xl mb-6 text-center"
                >
                  <figure>
                    <img src={item.image} alt={item._id} />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-2xl font-bold">{item.name}</h2>
                    <p>{item.recipe}</p>
                    <p className="absolute text-lg top-5 right-5 bg-slate-900 text-white px-4 rounded-3xl">
                      {item.price}$
                    </p>
                    <button className="btn bg-blue-500 text-white bg-transparent border-0 border-b-4 border-r-4 border-black">
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;

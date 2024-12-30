import React from "react";
import Banner from "../Components/Banner";
import Category from "../Components/Category";
import PopularMenu from "../Components/PopularMenu";
import BistroBoss from "../Components/BistroBoss";
import FromOurMenu from "../Components/FromOurMenu";
import Testimonials from "../Components/Testimonials";
import ContactUs from "../Components/ContactUs";
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <BistroBoss></BistroBoss>
      <FromOurMenu></FromOurMenu>
      <ContactUs></ContactUs>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;

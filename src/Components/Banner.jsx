import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/home/01.jpg";
import img2 from "../assets/home/02.jpg";
import img3 from "../assets/home/03.png";
import img4 from "../assets/home/04.jpg";
import img5 from "../assets/home/05.png";
import img6 from "../assets/home/06.png";

const Banner = () => {
  return (
    <div className="w-full h-[600px] overflow-hidden">
      <Carousel className="h-[600px]">
        <div>
          <img
            src={img1}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={img2}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={img3}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={img4}
            alt="Slide 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={img5}
            alt="Slide 5"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={img6}
            alt="Slide 6"
            className="w-full h-[600px] object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

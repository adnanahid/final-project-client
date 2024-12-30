import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slider1 from "../assets/home/slide1.jpg";
import slider2 from "../assets/home/slide2.jpg";
import slider3 from "../assets/home/slide3.jpg";
import slider4 from "../assets/home/slide4.jpg";
import slider5 from "../assets/home/slide5.jpg";
import SectionTitle from "./SectionTitle";

const Category = () => {
  return (
    <div className="my-16">
      <SectionTitle
        subTitle={"---From 11:00am to 10:00pm---"}
        title={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-6 max-w-screen-lg mx-auto"
      >
        <SwiperSlide className="mb-16">
          <img src={slider1} alt="" />
          <h1 className="-mt-16 text-3xl text-white text-center">SALAD</h1>
        </SwiperSlide>
        <SwiperSlide className="mb-16">
          <img src={slider2} alt="" />
          <h1 className="-mt-16 text-3xl text-white text-center">SALAD</h1>
        </SwiperSlide>
        <SwiperSlide className="mb-16">
          <img src={slider3} alt="" />
          <h1 className="-mt-16 text-3xl text-white text-center">SALAD</h1>
        </SwiperSlide>
        <SwiperSlide className="mb-16">
          <img src={slider4} alt="" />
          <h1 className="-mt-16 text-3xl text-white text-center">SALAD</h1>
        </SwiperSlide>
        <SwiperSlide className="mb-16">
          <img src={slider5} alt="" />
          <h1 className="-mt-16 text-3xl text-white text-center">SALAD</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;

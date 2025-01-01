import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import axios from "axios";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // Import Swiper modules

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SectionTitle from "../SharedComponent/SectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/review") // Adjusted path to the public directory
      .then((response) => setReviews(response.data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto my-16">
      <SectionTitle subTitle={"What Our Client Says"} title={"Testimonials"} />
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]} // Added required modules
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        className="my-10"
      >
        {reviews.map((review, idx) => (
          <SwiperSlide
            key={idx}
            className="text-center max-w-screen-lg px-24 pb-12"
          >
            <Rating
              placeholderRating={review.rating}
              emptySymbol={<CiStar />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
              className="text-yellow-500"
            />
            <FaQuoteLeft className="w-20 h-20 mx-auto my-8" />
            <p className="text-lg">{review.details}</p>
            <p className="text-2xl font-bold mt-5 text-yellow-500">{review.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

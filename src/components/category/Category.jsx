import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionHeading from "./../SectionHeading";

const Category = () => {
  return (
    <section>
      <SectionHeading
        heading={"From 11:00am to 10:00pm"}
        subheading={"Order Online"}
      ></SectionHeading>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-20 "
      >
        <SwiperSlide>
          <img src={slide1} />
          <h3 className="text-white uppercase  -mt-16 p-2 text-center text-4xl ">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />

          <h3 className="text-white uppercase -mt-16 p-2 text-center text-4xl ">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />

          <h3 className="text-white uppercase  -mt-16  text-center text-4xl ">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />

          <h3 className="text-white uppercase  -mt-16 p-2 text-center text-4xl ">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />

          <h3 className="text-white uppercase  -mt-16 p-2 text-center text-2xl ">
            Starters
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

Category.propTypes = {};

export default Category;

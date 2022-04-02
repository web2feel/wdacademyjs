import { data } from "./data";
import Slides from "./Slides";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Pagination]);

function JobSlider() {
  const pagination = {
    clickable: true,
  };
  let breakpoints = {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  return (
    <div data-scroll data-scroll-speed='2' id='jobs_slider'>
      {data.length > 0 ? (
        <Swiper
          breakpoints={breakpoints}
          pagination={pagination}
          spaceBetween={30}
          slidesPerView={1}>
          {data.map((item) => (
            <SwiperSlide key={item.title}>
              <Slides data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </div>
  );
}

export default JobSlider;

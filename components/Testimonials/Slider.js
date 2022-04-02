import Slides from "./Slides";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "./data";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Pagination]);

function Slider() {
  const pagination = {
    clickable: true,
  };
  return (
    <div id='testimonial_slider' className='p-8 sm:p-12'>
      {data.length > 0 ? (
        <Swiper pagination={pagination} spaceBetween={10} slidesPerView={1}>
          {data.map((item) => (
            <SwiperSlide key={item.name}>
              <Slides data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </div>
  );
}

export default Slider;

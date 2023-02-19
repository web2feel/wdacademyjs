import React from "react";
import { data } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/components/pagination/pagination.min.css";
import Placement from "./Placement";
SwiperCore.use([Pagination]);

function Slider() {
  const pagination = {
    clickable: true,
  };
  return (
    <div className='p-8 sm:p-12'>
      {data.length > 0 ? (
        <Swiper
          pagination={pagination}
          autoHeight={true}
          spaceBetween={10}
         // slidesPerView={1}
          breakpoints={{
            0:{
              slidesPerView: 1
            },
            640: {
              slidesPerView: 2,
            },
            960:{
              slidesPerView: 3
            }
          }}
          >
          {data.map((item) => (
            <SwiperSlide key={item.name}>
              <Placement user={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </div>

  );
}

export default Slider;

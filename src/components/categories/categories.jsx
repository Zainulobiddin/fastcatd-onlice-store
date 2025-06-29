import { useGetCategories } from "@/store/category/category";
import { useEffect } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Categories() {
  const { categories, getCategories } = useGetCategories();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {categories?.map((category) => (
        <SwiperSlide className="py-10 flex justify-center">
          <div
            key={category.id}
            className="group border-[1px] transition duration-300 hover:bg-[#DB4444] border-[#0000004D] rounded-[4px] py-6 px-5 w-[95%] lg:max-w-[170px] m-auto  flex flex-col items-center gap-4 "
          >
            <img
              className=""
              src={`http://37.27.29.18:8002/images/${category.categoryImage}`}
              alt=""
            />
            <h4>{category.name}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

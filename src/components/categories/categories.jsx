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
      slidesPerView={5}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 5 },
      }}
    >
      {categories?.map((category) => (
        <SwiperSlide className="py-10 flex justify-center">
          <div
            key={category.id}
            className="group border-[1px] transition duration-300 hover:bg-[#DB4444] border-[#0000004D] rounded-[4px] py-6 px-5 w-[85%] lg:max-w-[170px] m-auto  flex flex-col items-center gap-4 "
          >
            <img
                className="w-32 h-32 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl shadow-md hover:shadow-xl object-cover transition duration-300 ease-in-out transform hover:scale-105"
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

// import { useGetCategories } from "@/store/category/category";
// import { useEffect } from "react";

// export default function Categories() {
//   const { categories, getCategories } = useGetCategories();

//   useEffect(() => {
//     getCategories();
//   }, []);

//   return (
//     <div className="flex flex-col items-center lg:flex-row gap-3 justify-between my-10  ">
//       {categories.slice(0, 6).map((category) => (
//         <div
//           key={category.id}
//           className="group border-[1px] transition duration-300 hover:bg-[#DB4444] border-[#0000004D] rounded-[4px] py-6 px-5 w-[170px] flex flex-col items-center gap-4 "
//         >
//           <img
//             src={`http://37.27.29.18:8002/images/${category.categoryImage}`}
//             alt=""
//           />
//           <h4>{category.name}</h4>
//         </div>
//       ))}
//     </div>
//   );
// }



import { useGetCategories } from "@/store/category/category";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function Categories() {
  const { categories, getCategories } = useGetCategories();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="my-10 w-full max-w-[1200px] m-auto">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="group border-[1px] transition duration-300 hover:bg-[#DB4444] border-[#0000004D] rounded-[4px] py-6 px-5 w-full flex flex-col items-center gap-4">
              <img
                src={`http://37.27.29.18:8002/images/${category.categoryImage}`}
                alt={category.name}
              />
              <h4>{category.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

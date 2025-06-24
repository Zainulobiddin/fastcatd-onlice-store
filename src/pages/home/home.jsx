import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import CardRed from "@/components/card-red/card-red";
import Time from "@/components/time/time";
import Arrow from "@/components/arrow/arrow";
import iphone from "#/iphone.svg";
import arrowRightW from "#/arrowRightW.svg";
import music from "#/music.svg";
import Iphone1 from "#/Iphone1.svg";
import grid1 from "#/grid1.svg";
import grid2 from "#/grid2.svg";
import grid3 from "#/grid3.svg";
import free1 from "#/free.svg";
import free2 from "#/free2.svg";
import free3 from "#/free3.svg";
import grid4 from "#/grid4.svg";
import Products from "@/components/products/products";
import Categories from "@/components/categories/categories";
import Free from "@/components/free/free";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useGetCategories } from "@/store/category/category";
export default function Home() {
  const {categories, getCategories} = useGetCategories()

    useEffect(() =>{
      getCategories()
    }, [])


  return (
    <div>
      <div className="lg:hidden flex justify-start mt-5 px-4 ">
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, margin: "auto" } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Search"
            className="border-none poppins "
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </div>

      <section className="flex flex-col  lg:flex-row gap-10 items-center  py-5 ">
       <section className="lg:w-[18%] flex flex-col  gap-4 lg:border-r-[1px] px-4 lg:border-[#0000001A] pr-5 ">
        {categories.map((categoryName) => (
          <ul className="">
            <li className="bg-[#F5F5F5] cursor-pointer hover:text-[#DB4444] px-3 py-3 rounded-[4px] lg:bg-white lg:px-0 lg:py-0">{categoryName.categoryName}</li>
          </ul>
        ))}
      </section>
        <div className="w-[100%] lg:w-full max-w-[900px] mx-auto py-10 lg:h-[500px] ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="w-full lg:h-[444px] flex items-center justify-center ">
                <div className="flex flex-col lg:flex-row gap-9 items-center px-5 py-7 bg-black text-white ">
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-4 items-center">
                      <img className="" src={iphone} alt="" />
                      <p className="poppins">iPhone 14 Series</p>
                    </div>
                    <h3 className="inter font-semibold text-[48px] leading-[60px] tracking-[4%] inter ">
                      Up to 10% off Voucher
                    </h3>
                    <div className="flex gap-2 items-center">
                      <p className="underline poppins font-normal ">Shop Now</p>
                      <img src={arrowRightW} alt="" />
                    </div>
                  </div>
                  <img src={Iphone1} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="lg:h-[444px] flex items-center justify-center   ">
                <div className="flex flex-col lg:flex-row gap-9 items-center px-5 py-7 bg-black text-white ">
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-4 items-center">
                      <img className="" src={iphone} alt="" />
                      <p className="poppins">iPhone 14 Series</p>
                    </div>
                    <h3 className="inter font-semibold text-[48px] leading-[60px] tracking-[4%] inter ">
                      Up to 10% off Voucher
                    </h3>
                    <div className="flex gap-2 items-center">
                      <p className="underline poppins font-normal ">Shop Now</p>
                      <img src={arrowRightW} alt="" />
                    </div>
                  </div>
                  <img src={Iphone1} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="lg:h-[444px] flex items-center justify-center   ">
                <div className="flex flex-col lg:flex-row gap-9 items-center px-5 py-7 bg-black text-white ">
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-4 items-center">
                      <img className="" src={iphone} alt="" />
                      <p className="poppins">iPhone 14 Series</p>
                    </div>
                    <h3 className="inter font-semibold text-[48px] leading-[60px] tracking-[4%] inter ">
                      Up to 10% off Voucher
                    </h3>
                    <div className="flex gap-2 items-center">
                      <p className="underline poppins font-normal ">Shop Now</p>
                      <img src={arrowRightW} alt="" />
                    </div>
                  </div>
                  <img src={Iphone1} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
     
      <section className="flex flex-col lg:flex-row items-start lg:justify-between lg:items-end px-5 ">
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-3 lg:gap-[87px]  ">
          <div className="flex flex-col gap-6">
            <CardRed title={"Today’s"} />
            <h1 className="font-semibold text-[36px] leading-[48px] tracking-[4%] ">
              Flash Sales
            </h1>
          </div>
          <Time />
        </div>
        <Arrow />
      </section>

      <section>
        <Products />
      </section>

      <hr className="my-[60px] text-[#F5F5F5] " />

      <section className="flex flex-col lg:flex-row items-start lg:justify-between lg:items-end px-5 ">
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-3 lg:gap-[87px]  ">
          <div className="flex flex-col gap-6">
            <CardRed title={"Categories"} />
            <h1 className="font-semibold text-[36px] leading-[48px] tracking-[4%] ">
              Browse By Category
            </h1>
          </div>
        </div>
        <Arrow />
      </section>

      <section>
        <Categories />
      </section>

      <hr className="my-[60px] text-[#F5F5F5] " />

      <section className="flex flex-col lg:flex-row items-start lg:justify-between lg:items-end px-5 gap-3 ">
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-3 lg:gap-[87px]  ">
          <div className="flex flex-col gap-6">
            <CardRed title={"This Month"} />
            <h1 className="font-semibold text-[26px] lg:text-[36px] lg:leading-[48px] tracking-[4%] ">
              Best Selling Products
            </h1>
          </div>
        </div>
        <Link to={'/all-products'}>
          <button className="px-12 py-4 bg-[#DB4444] text-[#FAFAFA] rounded-[4px] font-normal poppins  ">
            View All
          </button>
        </Link>
      </section>

      <section>
        <Products />
      </section>

      <section className="bg-black flex flex-col lg:flex-row items-center justify-around my-10 ">
        <div className="flex flex-col gap-8 items-start px-5 py-4 ">
          <p className="text-[#00FF66]">Categories</p>
          <h2 className="text-[#FAFAFA] font-semibold lg:text-[48px] lg:leading-[60px] text-[28px]  leading-[100%]">
            Enhance Your Music Experience
          </h2>
          <div className="flex gap-6">
            <div className="bg-white w-[62px] h-[62px] px-5 py-3 justify-center rounded-[50%] flex flex-col items-center ">
              <p className="font-semibold poppins">23</p>
              <p>Hours</p>
            </div>

            <div className="bg-white w-[62px] h-[62px] px-5 py-3 justify-center rounded-[50%] flex flex-col items-center ">
              <p className="font-semibold poppins">05</p>
              <p>Days</p>
            </div>

            <div className="bg-white w-[62px] h-[62px] px-5 py-3 justify-center rounded-[50%] flex flex-col items-center ">
              <p className="font-semibold poppins">59</p>
              <p>Minutes</p>
            </div>

            <div className="bg-white w-[62px] h-[62px] px-5 py-3 justify-center rounded-[50%] flex flex-col items-center ">
              <p className="font-semibold poppins">35</p>
              <p>Seconds</p>
            </div>
          </div>
          <button className="bg-[#00FF66] py-4 px-12 font-normal rounded-[4px] ">
            Buy Now!
          </button>
        </div>
        <img className="w-[85%] m-auto" src={music} alt="" />
      </section>

      <section className="flex flex-col lg:flex-row items-start lg:justify-between lg:items-end px-5 gap-3 ">
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-3 lg:gap-[87px]  ">
          <div className="flex flex-col gap-6">
            <CardRed title={"Our Products"} />
            <h1 className="font-semibold text-[26px] lg:text-[36px] lg:leading-[48px] tracking-[4%] ">
              Explore Our Products
            </h1>
          </div>
        </div>
      </section>

      <section>
        <Products />
      </section>

      <section className="flex flex-col lg:flex-row items-start lg:justify-between lg:items-end px-5 gap-3 py-5 ">
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-3 lg:gap-[87px]  ">
          <div className="flex flex-col gap-6">
            <CardRed title={"Featured"} />
            <h1 className="font-semibold text-[26px] lg:text-[36px] lg:leading-[48px] tracking-[4%] ">
              New Arrival
            </h1>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        <div className="lg:col-span-2 relative bg-black rounded-lg overflow-hidden h-[350px] ">
          <img
            src={grid1}
            alt="PlayStation"
            className="w-full  object-cover opacity-80"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-semibold">PlayStation 5</h2>
            <p className="text-sm mb-2">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="bg-white text-black px-4 py-1 rounded">
              Shop Now
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative bg-black rounded-lg overflow-hidden h-[160px]">
            <img
              src={grid2}
              alt="Women"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="font-semibold">Women’s Collections</h2>
              <p className="text-sm">
                Featured woman collections that give you another vibe.
              </p>
              <button className="bg-white text-black px-3 py-1 rounded mt-2">
                Shop Now
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative bg-black rounded-lg overflow-hidden h-[160px]">
              <img
                src={grid3}
                alt="Speakers"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="font-semibold">Speakers</h2>
                <p className="text-sm">Amazon wireless speakers</p>
                <button className="bg-white text-black px-3 py-1 rounded mt-2">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="relative bg-black rounded-lg overflow-hidden h-[160px]">
              <img
                src={grid4}
                alt="Perfume"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="font-semibold">Perfume</h2>
                <p className="text-sm">GUCCI INTENSEOUD EDP</p>
                <button className="bg-white text-black px-3 py-1 rounded mt-2">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-20 py-[60px] ">
        <Free src={free1} title={"FREE AND FAST DELIVERY"}>
          Free delivery for all orders over $140
        </Free>
        <Free src={free2} title={"24/7 CUSTOMER SERVICE"}>
          Friendly 24/7 customer support
        </Free>
        <Free src={free3} title={"MONEY BACK GUARANTEE"}>
          We reurn money within 30 days
        </Free>
      </section>
    </div>
  );
}

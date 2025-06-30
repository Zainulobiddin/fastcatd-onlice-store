import star1 from "#/star1.svg";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useProducts } from "@/store/products/products";
import toast from "react-hot-toast";
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
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useCart } from "@/store/cart/cart";

export default function Products() {
  const { products, getProducts, setCountWishlistProducts } = useProducts();
  const { setAddToCart } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  let wishlistProduct = localStorage.getItem("wishlistProduct");
  if (wishlistProduct) {
    wishlistProduct = JSON.parse(localStorage.getItem("wishlistProduct"));
  } else {
    localStorage.setItem("wishlistProduct", []);
    wishlistProduct = [];
  }

  async function handleAddToCart(id) {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You didn't log in ");
      navigate("log-in");
    } else {
      await setAddToCart(id);
    }
  }

  function handleLike(product) {
    let newProductToWishlist = {
      id: product.id,
      image: product.image,
      price: product.price,
      productName: product.productName,
    };

    const find = wishlistProduct.find((wish) => wish.id === product.id);
    if (!find) {
      wishlistProduct.push(newProductToWishlist);
      localStorage.setItem("wishlistProduct", JSON.stringify(wishlistProduct));
      getProducts();
    } else {
      const filtered = wishlistProduct.filter((wish) => wish.id !== product.id);
      localStorage.setItem("wishlistProduct", JSON.stringify(filtered));
      getProducts();
    }
    setCountWishlistProducts(product.id);
  }

  return (
    <>
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
          0: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {products?.products?.map((product) => {
          let isLiked = wishlistProduct.find((wish) => wish.id === product.id);
          return (
            <SwiperSlide
              className="flex justify-center items-center py-8"
              key={product.id}
            >
              <div className="flex flex-col items-center gap-2 duration-300">
                <div className="group w-[90%] h-[250px] bg-[#F5F5F5] rounded-[8px] relative overflow-hidden">
                  <div className="flex justify-between px-3 py-3">
                    <p className="px-3 bg-[#DB4444] h-[26px] text-[#FAFAFA] rounded-[4px] ">
                      -{product.discountPrice}%
                    </p>
                    <div className="flex flex-col gap-2">
                      {isLiked ? (
                        <FavoriteIcon
                          className="cursor-pointer text-red-500"
                          onClick={() => handleLike(product)}
                        />
                      ) : (
                        <FavoriteBorderIcon
                          className="cursor-pointer text-black "
                          onClick={() => handleLike(product)}
                        />
                      )}
                      <Link to={`products/${product.id}`}>
                        <RemoveRedEyeIcon />
                      </Link>
                    </div>
                  </div>

                  <img
                    className="m-auto w-[170px] h-[140px] mt-[-30px]"
                    src={`http://37.27.29.18:8002/images/${product.image}`}
                    alt=""
                  />

                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="absolute bottom-0 left-0 w-full mt-4 bg-black text-white py-2 font-normal poppins opacity-0 group-hover:opacity-100 transition duration-300"
                  >
                    Add To Cart
                  </button>
                </div>

                <h4>
                  <b>{product.productName}</b>
                </h4>
                <div className="flex gap-3 items-center font-normal poppins">
                  <p className="text-[#DB4444]  ">${product.price}</p>
                  <p className="text-[#727171]">{product.hasDiscount}</p>
                </div>
                <div className="flex gap-2">
                  <img src={star1} alt="" />
                  <p className="text-[#727171]">({product.quantity})</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-start lg:justify-center px-4 mt-6">
        <Link to={"/all-products"}>
          <button className="px-12 py-4 bg-[#DB4444] hover:bg-[#c33c3c] transition duration-300 text-white rounded-md font-medium poppins shadow-md hover:shadow-lg">
            View All Products
          </button>
        </Link>
      </div>
    </>
  );
}

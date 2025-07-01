import star2 from "#/star2.svg";
import car from "#/car.svg";
import reload from "#/reload.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CardRed from "../card-red/card-red";
import Products from "../products/products";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useInfo } from "@/store/info/info";
import { API } from "@/utils/config";
import { useProducts } from "@/store/products/products";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useCart } from "@/store/cart/cart";

export default function Info() {
  const { getProductByID, infoProduct } = useInfo();
  const { id } = useParams();
  const { setCountWishlistProducts, getProducts } = useProducts();
  const { setAddToCart } = useCart();

  useEffect(() => {
    getProducts();
    if (id) {
      getProductByID(id);
    }
  }, [id]);

  let wishlistProduct = localStorage.getItem("wishlistProduct");
  if (wishlistProduct) {
    wishlistProduct = JSON.parse(localStorage.getItem("wishlistProduct"));
  } else {
    localStorage.setItem("wishlistProduct", []);
    wishlistProduct = [];
  }

  let isLiked = wishlistProduct.find((wish) => wish.id === infoProduct.id);

  function handleLike(infoProduct) {
    let newProductToWishlist = {
      id: infoProduct.id,
      image: infoProduct.image,
      price: infoProduct.price,
      productName: infoProduct.productName,
    };

    const find = wishlistProduct.find((wish) => wish.id == infoProduct.id);
    if (!find) {
      wishlistProduct.push(newProductToWishlist);
      localStorage.setItem("wishlistProduct", JSON.stringify(wishlistProduct));
      getProducts();
    } else {
      const filtered = wishlistProduct.filter(
        (wish) => wish.id !== infoProduct.id
      );
      localStorage.setItem("wishlistProduct", JSON.stringify(filtered));
      getProducts();
    }
    setCountWishlistProducts(infoProduct.id);
  }

  function handleAddToCart(id) {
    setAddToCart(id);
  }

  return (
    <div>
      <p className="my-6 px-4 text-gray-600 text-sm sm:text-base">
        Account / Gaming /{" "}
        <span className="font-semibold text-gray-900">
          Havic HV G-92 Gamepad
        </span>
      </p>
      <div className="flex flex-col  lg:flex-row gap-5 my-10 mb-16">
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          <div className="flex lg:flex-col items-center gap-4 lg:justify-between justify-center ">
            {infoProduct?.images?.map((image) => (
              <img
                src={`${API}/images/${image.images}`}
                className="lg:px-6 lg:py-3 px-2.5 py-1.5 bg-[#F5F5F5] rounded-[4px] w-[80px] lg:w-[261px] "
              />
            ))}
          </div>

          <div className="lg:h-full px-7 bg-[#F5F5F5] lg:w-[500px] rounded-[4px] flex items-center justify-center w-[90%] m-auto">
            {infoProduct.images?.length > 0 ? (
              <img
                className="w-full"
                src={`${API}/images/${infoProduct.images[0].images}`}
              />
            ) : (
              <div>Picture not found</div>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:w-[500px] gap-5 lg:ml-[40px] px-5 ">
          <p>{infoProduct.productName}</p>
          <div className="flex gap-3">
            <img src={star2} alt="" />
            <p className="text-[#a09f9f]">(150 Reviews)</p>
            <p className="text-[#a09f9f]">|</p>
            <p className="text-green-400 font-semibold">In Stock</p>
          </div>
          <h3 className="text-[24px] tracking-[3%] ">
            <b>${infoProduct.price}</b>
          </h3>
          <p className="text-[14px] text-[#646464] ">
            {infoProduct.description}
          </p>
          <hr className="text-[#a09f9f]" />
          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold mb-2">Colors:</p>
            <div className="flex gap-3 mt-[-10px]">
              <span className="w-6 h-6 rounded-full bg-red-500 cursor-pointer hover:ring-2 hover:ring-red-500 transition" />
              <span className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer hover:ring-2 hover:ring-blue-500 transition" />
              <span className="w-6 h-6 rounded-full bg-yellow-400 cursor-pointer hover:ring-2 hover:ring-yellow-400 transition" />
              <span className="w-6 h-6 rounded-full bg-gray-700 cursor-pointer hover:ring-2 hover:ring-gray-700 transition" />
            </div>
          </div>

          <div className="flex gap-6 items-center mt-4">
            <p className="text-lg font-semibold min-w-[40px]">Size:</p>
            <div className="flex gap-3 flex-wrap">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <p
                  key={size}
                  className="px-3 py-1.5 cursor-pointer border border-gray-400 rounded-md hover:bg-red-600 hover:text-white transition"
                >
                  {size}
                </p>
              ))}
            </div>
          </div>

        <div className="flex justify-between items-center mt-6">
  <div className="flex border border-gray-400 rounded-md overflow-hidden">
    <button className="px-3 py-2 bg-[#DB4444] text-white font-semibold cursor-pointer hover:bg-red-700 transition">-</button>
    <p className="w-14 text-center flex items-center justify-center">2</p>
    <button className="px-3 py-2 bg-[#DB4444] text-white font-semibold cursor-pointer hover:bg-red-700 transition">+</button>
  </div>

  <button
    onClick={() => handleAddToCart(infoProduct.id)}
    className="bg-[#DB4444] py-3 px-8 rounded-md text-white font-semibold shadow-md hover:bg-red-700 transition"
  >
    Buy Now
  </button>

  {isLiked ? (
    <button
      onClick={() => handleLike(infoProduct)}
      className="border border-gray-400 rounded-md p-2 hover:bg-red-600 hover:text-white transition"
      aria-label="Remove from wishlist"
    >
      <FavoriteIcon className="text-red-600" />
    </button>
  ) : (
    <button
      onClick={() => handleLike(infoProduct)}
      className="border border-gray-400 rounded-md p-2 hover:bg-red-600 hover:text-white transition"
      aria-label="Add to wishlist"
    >
      <FavoriteBorderIcon className="text-gray-600" />
    </button>
  )}
</div>


          <div className="border-[1px] border-[#00000080] rounded-[4px] flex flex-col gap-3 ">
            <div className="flex gap-4 px-5 py-4">
              <img src={car} alt="" />
              <div>
                <h4>Free Delivery</h4>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <hr />
            <div className="flex gap-4 px-5 py-4">
              <img src={reload} alt="" />
              <div>
                <h4>Return Delivery</h4>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-8 my-[100px]  ">
        <CardRed title={"Related Item"} />
        <div className="w-full max-w-[1300px] mx-auto">
          <Products />
        </div>
      </section>
    </div>
  );
}

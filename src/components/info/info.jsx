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

export default function Info() {
  const { getProductByID, infoProduct } = useInfo();
  const { id } = useParams();
  const { setCountWishlistProducts, getProducts, setAddToCart } = useProducts();

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
      <p className="my-6 px-4">
        Account / Gaming / <span>Havic HV G-92 Gamepad</span>
      </p>
      <div className="flex flex-col  lg:flex-row gap-5 my-10 mb-16">
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          <div className="flex lg:flex-col items-center gap-4 lg:justify-between justify-center ">
            {infoProduct?.images?.map((image) => (
              <img
                src={`${API}/images/${image.images}`}
                alt=""
                className="lg:px-6 lg:py-3 px-2.5 py-1.5 bg-[#F5F5F5] rounded-[4px] w-[80px] lg:w-[261px] "
              />
            ))}
          </div>

          <div className="lg:h-full px-7 bg-[#F5F5F5] lg:w-[500px] rounded-[4px] flex items-center justify-center w-[90%] m-auto">
            {infoProduct.images?.length > 0 ? (
              <img
                className="w-full"
                src={`${API}/images/${infoProduct.images[0].images}`}
                alt={infoProduct.productName}
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
          <div>
            <p className="text-[20px]  ">Colors: </p>
          </div>
          <div className="flex gap-5 items-center">
            <p className="text-[20px]  ">Size: </p>
            <div className="flex gap-3">
              <p className="px-[11px] cursor-pointer py-[6px] border-[1px] border-[#00000080] rounded-[4px] hover:bg-[#DB4444] hover:text-white ">
                XS
              </p>
              <p className="px-[11px] cursor-pointer py-[6px] border-[1px] border-[#00000080] rounded-[4px] hover:bg-[#DB4444] hover:text-white ">
                S
              </p>
              <p className="px-[11px] cursor-pointer py-[6px] border-[1px] border-[#00000080] rounded-[4px] hover:bg-[#DB4444] hover:text-white ">
                M
              </p>
              <p className="px-[11px] cursor-pointer py-[6px] border-[1px] border-[#00000080] rounded-[4px] hover:bg-[#DB4444] hover:text-white ">
                L
              </p>
              <p className="px-[11px] cursor-pointer py-[6px] border-[1px] border-[#00000080] rounded-[4px] hover:bg-[#DB4444] hover:text-white ">
                Xl
              </p>
            </div>
          </div>

          <div className="flex justify-between  ">
            <div className="flex border-[1px] border-[#00000080] rounded-[4px] items-center">
              <button className="px-2.5 py-2 bg-[#DB4444] font-semibold cursor-pointer">
                -
              </button>
              <p className="w-[80px] text-center ">2</p>
              <button className="px-2.5 py-2 bg-[#DB4444] text-white font-semibold cursor-pointer">
                +
              </button>
            </div>

            <button onClick={() => handleAddToCart(infoProduct.id)} className="bg-[#DB4444] poppins py-2.5 px-7 lg:px-12 rounded-[4px] text-white cursor-pointer ">
              Buy Now
            </button>
            {isLiked ? (
              <button className="border-[1px] rounded-[4px] border-[#00000080] px-2.5 cursor-pointer">
                <FavoriteIcon
                  className="cursor-pointer text-red-500"
                  onClick={() => handleLike(infoProduct)}
                />
              </button>
            ) : (
              <button className="border-[1px] rounded-[4px] border-[#00000080] px-2.5 cursor-pointer">
                <FavoriteBorderIcon
                  className="cursor-pointer text-black "
                  onClick={() => handleLike(infoProduct)}
                />
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

import star1 from "#/star1.svg";
// import star2 from "#/star2.svg";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import star3 from "#/star3.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useProducts } from "@/store/products/products";
export default function Products() {
  const {products, getProducts} = useProducts()

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between py-8 gap-3  ">
        {products?.products?.map((product) => (
          <div className="flex flex-col gap-2">
            <div
              key={product.id}
              className="group w-[270px] h-[250px] bg-[#F5F5F5] rounded-[8px] relative overflow-hidden"
            >
              <div className="flex justify-between px-3 py-3">
                <p className="px-3 bg-[#DB4444] h-[26px] text-[#FAFAFA] rounded-[4px] ">
                  -{product.discountPrice}%
                </p>
                <div className="flex flex-col gap-2">
                  <FavoriteBorderIcon />
                  <RemoveRedEyeIcon />
                </div>
              </div>

              <img
                className="m-auto w-[170px] h-[140px] mt-[-30px]"
                src={`http://37.27.29.18:8002/images/${product.image}`}
                alt=""
              />

              <button className="absolute bottom-0 left-0 w-full mt-4 bg-black text-white py-2 font-normal poppins opacity-0 group-hover:opacity-100 transition duration-300">
                Add To Cart
              </button>
            </div>

            <h4><b>{product.productName}</b></h4>
            <div className="flex gap-3 items-center font-normal poppins">
              <p className="text-[#DB4444]  ">${product.price}</p>
              <p className="text-[#727171]">{product.hasDiscount}</p>
            </div>
            <div className="flex gap-2">
              <img src={star1} alt="" />
              <p className="text-[#727171]">({product.quantity})</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-start lg:justify-center px-4">
        <Link to={"/all-products"}>
          <button className="px-12 py-4 cursor-pointer bg-[#DB4444] text-[#FAFAFA] rounded-[4px] font-normal poppins  ">
            View All Products
          </button>
        </Link>
      </div>
    </>
  );
}

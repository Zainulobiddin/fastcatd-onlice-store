import CardRed from "@/components/card-red/card-red";
import star1 from "#/star1.svg";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Products from "@/components/products/products";
import { useEffect } from "react";
import { useProducts } from "@/store/products/products";
import { IconButton } from "@mui/material";

export default function Wishlist() {

  const {getProducts} = useProducts()

  useEffect(() => {
  getProducts()
  }, [])


  let wishlistProduct = localStorage.getItem("wishlistProduct");
  if (wishlistProduct) {
    wishlistProduct = JSON.parse(localStorage.getItem("wishlistProduct"));
  } else {
    localStorage.setItem("wishlistProduct", []);
    wishlistProduct = [];
  }

  function handleDeleteProductFromWishlist(product) {
    const find = wishlistProduct.find((wish) => wish.id === product.id);
    if (find) {
      const filtered = wishlistProduct.filter((wish) => wish.id !== product.id);
      localStorage.setItem("wishlistProduct", JSON.stringify(filtered));
    }
    getProducts()
  }

  return (
    <div className="my-12">
      <div className="flex justify-between items-center px-4 ">
        <p>Wishlist ({wishlistProduct.length})</p>
        <button className="px-12 py-4 border-[1px] border-[#00000080] rounded-[4px] ">
          Move All To Bag
        </button>
      </div>
      <div className="flex  lg:flex-wrap items-center py-8 gap-3  ">
        {wishlistProduct?.map((wishlist) => (
          <div className="flex flex-col gap-2" key={wishlist.id}>
            <div className="group w-[270px] h-[250px] bg-[#F5F5F5] rounded-[8px] relative overflow-hidden">
              <div className="flex justify-between px-3 py-3">
                <p className="px-3 bg-[#DB4444] h-[26px] text-[#FAFAFA] rounded-[4px] ">
                  -{wishlist.discountPrice}%
                </p>
                <div
                  className="flex flex-col gap-2"
                  onClick={() => handleDeleteProductFromWishlist(wishlist)}
                >
                  <IconButton color='error'>
                  <DeleteForeverIcon color='error'  className="cursor-pointer" />
                  </IconButton>
                </div>
              </div>

              <img
                className=" m-auto w-[170px] h-[140px] mt-[10px]"
                src={`http://37.27.29.18:8002/images/${wishlist.image}`}
                alt=""
              />

              <button
                // onClick={() => handleAddToCart(wishlist.id)}
                className="absolute bottom-0 left-0 w-full mt-4 bg-black text-white py-2 font-normal poppins opacity-0 group-hover:opacity-100 transition duration-300"
              >
                Add To Cart
              </button>
            </div>

            <h4>
              <b>{wishlist.productName}</b>
            </h4>
            <div className="flex gap-3 items-center font-normal poppins">
              <p className="text-[#DB4444]  ">${wishlist.price}</p>
              <p className="text-[#727171]">{wishlist.hasDiscount}</p>
            </div>
            <div className="flex gap-2">
              <img src={star1} alt="" />
              <p className="text-[#727171]">({wishlist.quantity})</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center px-4">
        <CardRed title={"Just For You"} />
        <button className="px-12 py-4 border-[1px] border-[#00000080] rounded-[4px] ">
          See All
        </button>
      </div>

      <Products />
    </div>
  );
}

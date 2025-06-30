import { useGetCategories } from "@/store/category/category";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import star1 from "#/star1.svg";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useProducts } from "@/store/products/products";

export default function CategoryByID() {
  const { id } = useParams();
  const { getCategoryByID, productsByID, subCategory, getSubCategory, subCategoryByID } =
    useGetCategories();
  const { setCountWishlistProducts } = useProducts();

  let wishlistProduct = localStorage.getItem("wishlistProduct");

  if (wishlistProduct) {
    wishlistProduct = JSON.parse(localStorage.getItem("wishlistProduct"));
  } else {
    localStorage.setItem("wishlistProduct", []);
    wishlistProduct = [];
  }

  useEffect(() => {
    getCategoryByID(id);
    getSubCategory(id);
  }, []);

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
      getCategoryByID();
    } else {
      const filtered = wishlistProduct.filter((wish) => wish.id !== product.id);
      localStorage.setItem("wishlistProduct", JSON.stringify(filtered));
      getCategoryByID();
    }
    setCountWishlistProducts(product.id);
  }

  function handleSubcategoryByID(id) {
    subCategoryByID(id)
  }


  return (
    <div>
      <h1>Product by id ({productsByID.length}) </h1>

        <div className="flex gap-6 flex-wrap py-5 ">
            {subCategory?.map((sub) => (
               <ul key={sub.id}>
                <li onClick={() => handleSubcategoryByID(sub.id)} className="py-2 px-4 bg-amber-300 rounded-2xl hover:bg-green-400 cursor-pointer ">{sub.subCategoryName}</li>
               </ul>

            ))}
        </div>

            {productsByID && productsByID.length > 0 ?   (

      <div className="flex items-center gap-5 flex-wrap justify-center lg:justify-start ">
        {productsByID.map((e) => {
          let isLiked = wishlistProduct.find((wish) => wish.id === e.id);
          return (
            <div className="flex justify-center items-center py-8 " key={e.id}>
              <div className="flex flex-col items-center gap-2 duration-300  w-[270px]">
                <div className="group w-[90%]  h-[250px] bg-[#F5F5F5] rounded-[8px] relative overflow-hidden">
                  <div className="flex justify-between px-3 py-3">
                    <p className="px-3 bg-[#DB4444] h-[26px] text-[#FAFAFA] rounded-[4px] ">
                      -{e.discountPrice}%
                    </p>
                    <div className="flex flex-col gap-2">
                      {isLiked ? (
                        <FavoriteIcon
                          className="cursor-pointer text-red-500"
                          onClick={() => handleLike(e)}
                        />
                      ) : (
                        <FavoriteBorderIcon
                          className="cursor-pointer text-black "
                          onClick={() => handleLike(e)}
                        />
                      )}
                      <Link to={`/products/${e.id}`}>
                        <RemoveRedEyeIcon />
                      </Link>
                    </div>
                  </div>

                  <img
                    className="m-auto w-[170px] h-[140px] mt-[-30px]"
                    src={`http://37.27.29.18:8002/images/${e.image}`}
                    alt=""
                  />

                  <button
                    // onClick={() => handleAddToCart(product.id)}
                    className="absolute bottom-0 left-0 w-full mt-4 bg-black text-white py-2 font-normal poppins opacity-0 group-hover:opacity-100 transition duration-300"
                  >
                    Add To Cart
                  </button>
                </div>

                <h4>
                  <b>{e.productName}</b>
                </h4>
                <div className="flex gap-3 items-center font-normal poppins">
                  <p className="text-[#DB4444]  ">${e.price}</p>
                  <p className="text-[#727171]">{e.hasDiscount}</p>
                </div>
                <div className="flex gap-2">
                  <img src={star1} alt="" />
                  <p className="text-[#727171]">({e.quantity})</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
            ) : ( <p className="text-center text-gray-500 text-lg py-10"> This subcategory has no products.</p>)}
    </div>
  );
}

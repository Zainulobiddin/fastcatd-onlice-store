import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "#/logo.svg";
import logoPhone from "#/logoPhone.svg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton, InputAdornment, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect, useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import LogoutIcon from "@mui/icons-material/Logout";
import { useProducts } from "@/store/products/products";
import { removeToken } from "@/utils/other";
import toast from "react-hot-toast";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useCart } from "@/store/cart/cart";

export default function Header() {
  const [profilModal, setProfilModal] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { searchProductName } = useProducts();
  const { cartProducts, getCart } = useCart();

  // localStorage
  let wishlistProduct = localStorage.getItem("wishlistProduct");
  if (wishlistProduct) {
    wishlistProduct = JSON.parse(localStorage.getItem("wishlistProduct"));
  } else {
    localStorage.setItem("wishlistProduct", []);
    wishlistProduct = [];
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // function profil
  function handleAccount() {
    navigate("/my-account");
    setProfilModal(!profilModal);
  }

  // function log out
  function handleLogOut() {
    const token = localStorage.getItem("token");
    removeToken(token);
    toast.success("You have successfully logged out");
    navigate("/");
    setProfilModal(false);
  }

  function handleSearch(e) {
    setSearch(e);
    searchProductName(e);
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <div className=" px-4 py-5 fixed top-0 left-0  w-full shadow-md flex md:justify-around items-center  z-10 bg-white border-b-[0.5px] border-b-gray-300 ">
        <div className="lg:hidden justify-between items-center flex w-full ">
          <div className="flex gap-4">
            <MenuIcon onClick={handleClickOpen} />
            <img src={logoPhone} alt="" />
          </div>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              sx: {
                position: "absolute",
                top: 60,
                left: 19,
                m: 0,
              },
            }}
          >
            <DialogContent className="w-[170px] flex flex-col gap-4 py-4 px-3 text-[15px] text-gray-800 font-medium">
              <Link to={"/"}>Home</Link>
              <Link to={"/contact"}>Contact</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/sign-up"}>Sign Up</Link>
            </DialogContent>
          </Dialog>

          <div className="flex items-center gap-5">
            {localStorage.getItem("token") && (
              <Box className="flex items-center gap-5">
                <Box className="relative">
                  <Link to={"/wishlist"}>
                    <FavoriteBorderIcon />
                    {wishlistProduct.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[11px] font-semibold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                        {wishlistProduct.length}
                      </span>
                    )}
                  </Link>
                </Box>

                <Link to={"card"}>
                  <Box className="flex items-start relative">
                    <ShoppingCartIcon />
                    <p className="absolute -top-3 -right-2 bg-red-600 text-white text-[11px] font-semibold rounded-full px-[6px] py-[2px] shadow-sm">
                      {cartProducts[0]?.productsInCart?.length}
                    </p>
                  </Box>
                </Link>
              </Box>
            )}
  
            <IconButton
              color="black"
              onClick={() => setProfilModal(!profilModal)}
            >
              <AccountCircleIcon />
            </IconButton>
          </div>
        </div>

        <div className="hidden lg:flex gap-[150px] items-center justify-between  ">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <div className="poppins flex gap-6">
            <NavLink
              className="hover:text-blue-600 hover:underline underline-offset-4 transition duration-200"
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className="hover:text-blue-600 hover:underline underline-offset-4 transition duration-200"
              to={"/contact"}
            >
              Contact
            </NavLink>
            <NavLink
              className="hover:text-blue-600 hover:underline underline-offset-4 transition duration-200"
              to={"/about"}
            >
              About
            </NavLink>
            <NavLink
              className="hover:text-blue-600 hover:underline underline-offset-4 transition duration-200"
              to={"/sign-up"}
            >
              Sign Up
            </NavLink>
          </div>

          <div className="flex items-center gap-4 ">
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "30ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                placeholder="What are you looking for?"
                variant="outlined"
                className="border-none poppins "
                value={search}
                onChange={({ target }) => handleSearch(target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box className="flex gap-4 items-center">
              <Link to={"/wishlist"}>
                <Box>
                  <FavoriteBorderIcon />
                  <p className="text-[12px] leading-[18px] text-[#FAFAFA] poppins absolute top-[30px] right-[185px] z-1 bg-red-500 p-0.5 rounded-[50%] px-[6px] ">
                    {wishlistProduct.length}
                  </p>
                </Box>
              </Link>

              {localStorage.getItem("token") ? (
                <Link to={"card"}>
                  <Box className="flex items-start relative ">
                    <ShoppingCartIcon />
                    <p className="text-[12px] leading-[18px] text-[#FAFAFA] poppins absolute top-[-15px] right-[-5px] z-1 bg-red-500 p-0.5 rounded-[50%] px-[6px] ">
                      {cartProducts.length > 0
                        ? cartProducts[0].productsInCart.length
                        : 0}
                    </p>
                  </Box>
                </Link>
              ) : (
                <div className="px-4"></div>
              )}
            </Box>
            {localStorage.getItem("token") ? (
              <IconButton
                color="black"
                onClick={() => setProfilModal(!profilModal)}
              >
                <AccountCircleIcon />
              </IconButton>
            ) : (
              <div className="px-4"></div>
            )}

            {profilModal && (
              <div className="absolute  lg:right-[110px] lg:top-24 bg-black bg-opacity-80 flex flex-col gap-2.5 lg:py-4 lg:px-6 rounded-[4px] text-white z-50">
                <div
                  onClick={handleAccount}
                  className="flex gap-4 cursor-pointer"
                >
                  <PermIdentityIcon />
                  <p>Account</p>
                </div>
                <div className="flex gap-4 cursor-pointer">
                  <FilterFramesIcon />
                  <p>My Order</p>
                </div>
                <div
                  onClick={handleLogOut}
                  className="flex gap-4 cursor-pointer"
                >
                  <LogoutIcon />
                  <p>Logout</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="text-[#0000001A]" />
    </>
  );
}

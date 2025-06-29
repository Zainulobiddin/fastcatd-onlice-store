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
import { useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import LogoutIcon from "@mui/icons-material/Logout";
import { useProducts } from "@/store/products/products";
import { removeToken } from "@/utils/other";
import toast from "react-hot-toast";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

export default function Header() {
  const [profilModal, setProfilModal] = useState(false);
  const { countProducts } = useProducts();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('')
  const {searchProductName} = useProducts()

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
    setSearch(e.target.value)
    searchProductName(search)
  }





  return (
    <>
      <div className=" px-4 py-5  ">
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
            <DialogContent className="w-[150px] flex flex-col gap-4">
              <Link to={"/"}>Home</Link>
              <Link to={"/contact"}>Contact</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/sign-up"}>Sign Up</Link>
            </DialogContent>
          </Dialog>

          <div className="flex items-center gap-5">
            {localStorage.getItem("token") && (
              <Box className='flex items-center gap-5'>
                <Link to={"/wishlist"}>
                  <FavoriteBorderIcon />
                  {localStorage.getItem("wishlistProduct") ? (
                    <p className="text-[12px] leading-[18px] text-[#FAFAFA] poppins absolute top-[15px] right-[113px] z-1 bg-red-500 p-0.5 rounded-[50%] px-[6px] ">
                      {wishlistProduct.length}
                    </p>
                  ) : null}
                </Link>
                <Link to={"card"}>
                  <Box className="flex items-start relative">
                    <ShoppingCartIcon />
                    <p className="text-[12px] leading-[18px] text-[#FAFAFA] poppins absolute top-[-14px] right-[-6px] z-1 bg-red-500 p-0.5 rounded-[50%] px-[6px] ">
                      {countProducts}
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

        <div className="hidden lg:flex gap-[150px] items-center  ">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <div className="poppins flex gap-6">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/sign-up"}>Sign Up</NavLink>
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
                onChange={handleSearch}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {localStorage.getItem("token") && (
              <Box className="flex gap-4 items-center">
                <Link to={"/wishlist"}>
                  <FavoriteBorderIcon />
                  {localStorage.getItem("wishlistProduct") ? (
                    <p className="text-[12px] leading-[18px] text-[#FAFAFA] poppins absolute top-[30px] right-[190px] z-1 bg-red-500 p-0.5 rounded-[50%] px-[6px] ">
                      {wishlistProduct.length}
                    </p>
                  ) : null}
                </Link>

                <Link to={"card"}>
                  <Box className="flex items-start relative">
                    <ShoppingCartIcon />
                    {localStorage.getItem("token") ? (
                      <p className="text-[12px] leading-[18px] text-[#FAFAFA] poppins absolute top-[-15px] right-[-5px] z-1 bg-red-500 p-0.5 rounded-[50%] px-[6px] ">
                        {countProducts}
                      </p>
                    ) : null}
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

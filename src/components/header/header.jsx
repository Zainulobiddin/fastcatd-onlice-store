import { Link, NavLink } from "react-router-dom";
import logo from "#/logo.svg";
import logoPhone from "#/logoPhone.svg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton, InputAdornment } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Header() {
  const [profilModal, setProfilModal] = useState(false);
  return (
    <>
      <div className=" px-4 py-5  ">
        <div className="lg:hidden justify-between items-center flex w-full ">
          <div className="flex gap-4">
            <MenuIcon />
            <img src={logoPhone} alt="" />
          </div>
          <div>
            <ShoppingCartIcon />
            <IconButton
              color="error"
              onClick={() => setProfilModal(!profilModal)}
            >
              <AccountCircleIcon color="error" />
            </IconButton>
          </div>
        </div>

        <div className="hidden lg:flex gap-[150px] items-center  ">
          <img src={logo} alt="" />
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
              className=""
            >
              <TextField
                id="outlined-basic"
                placeholder="What are you looking for?"
                variant="outlined"
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
            <Link to={'/wishlist'}>
            <FavoriteBorderIcon />
            </Link>
            <ShoppingCartIcon />
            <IconButton
              color="error"
              onClick={() => setProfilModal(!profilModal)}
            >
              <AccountCircleIcon color="error" />
            </IconButton>
            {profilModal && (
              <div className="absolute  right-[20px] lg:right-[110px] top-[20] bg-amber-400 lg:top-[90px] flex flex-col gap-2.5 lg:bg-[#00000059] py-4 px-6 rounded-[4px] text-white z-2 ">
                <div className="flex gap-4 cursor-pointer">
                  <PermIdentityIcon />
                  <p>Account</p>
                </div>

                <div className="flex gap-4 cursor-pointer">
                  <FilterFramesIcon />
                  <p>My Order</p>
                </div>

                <div className="flex gap-4 cursor-pointer">
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

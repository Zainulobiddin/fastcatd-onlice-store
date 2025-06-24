import logo1 from "#/logo1.svg";
import facebook from "#/facebook.svg";
import twitter from "#/twitter.svg";
import instagram from "#/instagram.svg";
import linkedin from "#/linkedin.svg";
import { Box, InputAdornment, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  return (
    <>
      <div className="py-[60px] text-[#FAFAFA] flex flex-col lg:flex-row px-9 gap-9 lg:px-0 justify-between poppins">
        <div className=" flex flex-col gap-4 w-full lg:w-[217px] ">
          <div className="flex flex-col gap-6 items-start pl-2">
            <img src={logo1} alt="" />
            <h4>Subscribe</h4>
            <p>Get 10% off your first order</p>
          </div>
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1 } }}
            noValidate
            autoComplete="off"
            className="border-white"
          >
            <TextField
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // бордер сафед
                  },
                  "&:hover fieldset": {
                    borderColor: "white", // hover сафед мемонад
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // focus ҳам сафед
                  },
                },
              }}
              label="Enter your email"
              InputLabelProps={{
                style: { color: "white" }, // ранги label (барчасб)
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SendIcon style={{ color: "white", cursor: "pointer" }} />{" "}
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </div>

        <div className="flex flex-col gap-6 w-[175px]">
          <h3 className="text-[20px] poppins font-normal ">Support</h3>
          <div className="flex flex-col gap-4">
            <p className="poppins">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="poppins">exclusive@gmail.com</p>
            <p className="poppins">+88015-88888-9999</p>
          </div>
        </div>

        <div className="flex justify-between lg:gap-[87px] ">
          <div className="flex flex-col gap-6">
            <h3 className="text-[20px] poppins font-normal ">Account</h3>
            <div className="flex flex-col gap-4">
              <p className="poppins">My Account</p>
              <p className="poppins">Cart</p>
              <p className="poppins">Wishlist</p>
              <p className="poppins">Shop</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-[20px] poppins font-normal ">Quick Link</h3>
            <div className="flex flex-col gap-4">
              <p className="poppins">Privacy Policy</p>
              <p className="poppins">Terms Of Use</p>
              <p className="poppins">FAQ</p>
              <p className="poppins">Contact</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-[20px] poppins font-normal ">Social </h3>
          <div className="flex gap-6">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
      </div>

      <hr className="h-[3px] text-[#474747]" />

      <div
        className="text-[#3b3b3b] flex gap-2 justify-center py-4 poppins
 "
      >
        <p>@</p>
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </>
  );
}

import { Box, InputAdornment, TextField } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
export default function LogIn() {
  return (
    <div className="w-[90%] lg:w-[420px] m-auto h-[80vh]  justify-center flex flex-col gap-[33px] px-4 ">
      <div className="flex flex-col gap-2 px-2">
        <h2 className=" text-[32px] tracking-[4%] lg:text-[36px]  ">
          Log in to Exclusive
        </h2>
        <p>Enter your details below</p>
      </div>

      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1 } }}
        noValidate
        autoComplete="off"
        className="flex  flex-col "
      >
        <TextField
          id="outlined-basic"
          label="Email or phone number"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          InputLabelProps={{
            style: { color: "#00000099" },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <RemoveRedEyeIcon style={{ color: "black"}} />
              </InputAdornment>
            ),
            style: { color: "black" },
          }}
          label="Password"
          placeholder="**********"
          variant="outlined"
        />
      </Box>
      <div className="flex flex-col gap-4 w-full">
        <button className="py-4 font-medium rounded-[4px] text-[#DB4444]">Forget Password?</button>
        <button className="py-4 bg-[#DB4444] text-[#FAFAFA] font-medium rounded-[4px] ">
          Log In
        </button>
      </div>
    </div>
  );
}

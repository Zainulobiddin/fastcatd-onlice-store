import { Box, TextField } from "@mui/material";
import google from "#/google.svg";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className=" w-[90%] lg:w-[420px] m-auto h-[100vh]  justify-center flex flex-col gap-[33px] px-4 ">
      <div className="flex flex-col gap-2 px-2">
        <h2 className=" text-[32px] tracking-[4%] lg:text-[36px]  ">
          Create an account
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
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Email || Phone"
          placeholder="Email or phone number"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
      </Box>

      <div className="flex flex-col gap-4 w-full">
        <button className="py-4 bg-[#DB4444] text-[#FAFAFA] font-medium rounded-[4px] ">
          Create Account
        </button>

        <div className="flex items-center py-4 justify-center gap-4 border-[1px] border-[#00000066] rounded-[4px] ">
          <img src={google} alt="" />
          <p>Sign up with Google</p>
        </div>
        <div className="flex justify-center gap-4">
          <p>Already have account?</p>
          <p className="underline"></p>
          <Link to={'/log-in'}>Log in</Link>
        </div>
      </div>
    </div>
  );
}

import { Box, TextField } from "@mui/material";
import google from "#/google.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/store/auth/auth";
import toast from "react-hot-toast";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { postRegister } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('')
  async function handleRegister() {
    let register = {
      userName,
      phoneNumber,
      email,
      password,
      confirmPassword,
    };

    const resultPostRegister = await postRegister(register);
    
    if (resultPostRegister?.status === 200) {
      toast.success('Successfully toasted!')
      navigate("/log-in");
    } else {
      setError(resultPostRegister.errors)
    }
  }

  return (
    <div className=" w-[90%] lg:w-[420px] m-auto h-[110vh]  justify-center flex flex-col gap-[20px] px-4 ">
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
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          value={phoneNumber}
          onChange={({ target }) => setPhoneNumber(target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          placeholder="Email"
          variant="outlined"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          value={confirmPassword}
          onChange={({ target }) => setConfirmPassword(target.value)}
        />
      </Box>
        <span>{error}</span>
      <div className="flex flex-col gap-4 w-full">
        <button
          onClick={handleRegister}
          className="py-4 bg-[#DB4444] text-[#FAFAFA] font-medium rounded-[4px] "
        >
          Create Account
        </button>

        <div className="flex items-center py-4 justify-center gap-4 border-[1px] border-[#00000066] rounded-[4px] ">
          <img src={google} alt="" />
          <p>Sign up with Google</p>
        </div>
        <div className="flex justify-center gap-4">
          <p>Already have account?</p>
          <p className="underline"></p>
          <Link to={"/log-in"}>Log in</Link>
        </div>
      </div>
    </div>
  );
}

import { Box, InputAdornment, TextField } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/store/auth/auth";
import toast from "react-hot-toast";
export default function LogIn() {
  const navigate = useNavigate();
  const { postLogIn } = useAuth();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  async function handleLogIn() {
    let user = {
      userName,
      password,
    };
    const resultPostLogIn = await postLogIn(user);
    console.log("resultPostLogIn = ", resultPostLogIn);
    if (resultPostLogIn?.status == 200) {
      toast.success("Success log in");
      navigate("/");
    } else {
      setError(resultPostLogIn);
    }
  }

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
          label="UserName"
          variant="outlined"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />
        <TextField
          id="outlined-basic"
          value={password}
          type="password"
          onChange={({ target }) => setPassword(target.value)}
          InputLabelProps={{
            style: { color: "#00000099" },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <RemoveRedEyeIcon style={{ color: "black" }} />
              </InputAdornment>
            ),
            style: { color: "black" },
          }}
          label="Password"
          placeholder="**********"
          variant="outlined"
        />
      </Box>
      <b className="text-red-500 text-center ">{error}</b>

      <div className="flex flex-col justify-center gap-4 w-full">
        <Link to={"/sign-up"}>
          <p className="py-4 font-medium rounded-[4px] text-center text-[#DB4444] hover:bg-[#000] hover:text-white ">
            If you are not logged in, please log in!
          </p>
        </Link>
        <button
          onClick={handleLogIn}
          className="py-4 bg-[#DB4444] text-[#FAFAFA] font-medium rounded-[4px] "
        >
          Log In
        </button>
      </div>
    </div>
  );
}

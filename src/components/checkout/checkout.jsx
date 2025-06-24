import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import game from "#/game.svg";
import bank4 from "#/bank4.svg";
import bank3 from "#/bank3.svg";
import bank2 from "#/bank2.svg";
import bank1 from "#/bank1.svg";

export default function Checkout() {
  return (
    <div>
      <p className="my-6 px-4 text-gray-400">
        Product / View Cart / <b className="text-black">CheckOut</b>
      </p>

      <Box className="flex flex-col lg:flex-row justify-between my-12 gap-10 ">
        <Box className="flex flex-col gap-4">
          <h3 className="text-[28px] tracking-[4%] inter lg:text-[36px] lg:leading-[40px] px-4 ">Billing Details</h3>

          <Box className="border border-[#00000029] w-[90%] m-auto ">
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1,  } }}
              noValidate
              autoComplete="off"
              className="flex flex-col   "
            >
              <TextField
                id="outlined-basic"
                label="First name "
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Last name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Street address"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Apartment, floor, etc. (optional)"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Town/City"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Phone number"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Email address"
                variant="outlined"
              />
            </Box>
            <Box className="flex gap-4 items-center">
              <Checkbox />
              <p>Save this information for faster check-out next time</p>
            </Box>
          </Box>
        </Box>

        <Box className="lg:w-[460px] flex flex-col gap-8 w-[90%] m-auto ">
          <Box className="flex flex-col gap-2.5">
            <Box className="flex justify-between items-center">
              <Box className="flex gap-6 items-center">
                <img src={game} alt="" />
                <p>LCD Monitor</p>
              </Box>
              <p>$650</p>
            </Box>

            <Box className="flex justify-between items-center">
              <Box className="flex gap-6 items-center">
                <img src={game} alt="" />
                <p>LCD Monitor</p>
              </Box>
              <p>$650</p>
            </Box>
          </Box>

          <Box className="flex flex-col gap-4">
            <Box className="flex justify-between items-center">
              <p>Subtotal:</p>
              <p>$650</p>
            </Box>
            <Box className="flex justify-between items-center">
              <p>Subtotal:</p>
              <p>$650</p>
            </Box>
            <hr />
            <Box className="flex justify-between items-center">
              <p>Total:</p>
              <p>$1750</p>
            </Box>
          </Box>

          <Box className="flex gap-3 items-start justify-between">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Bank"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Cash on delivery"
                />
              </RadioGroup>
            </FormControl>

            <Box className="flex gap-3">
              <img src={bank1} alt="" />
              <img src={bank2} alt="" />
              <img src={bank3} alt="" />
              <img src={bank4} alt="" />
            </Box>
          </Box>

          <div className="flex items-center gap-4 px-5 lg:px-0 lg:justify-between ">
            <TextField
              label="Coupon Code"
              sx={{ height: "56px" }}
              InputProps={{
                sx: {
                  height: "50px",
                },
              }}
            />
            <Button
              variant="outlined"
              color="error"
              className="h-[50px] w-[120px]"
            >
              Apply
            </Button>
          </div>

          <button className="py-4 px-12 bg-[#DB4444] text-white rounded-[4px] ">Place Order</button>
        </Box>
      </Box>
    </div>
  );
}

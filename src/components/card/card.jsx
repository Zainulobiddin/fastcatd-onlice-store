import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Button, IconButton, TextField } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
];
export default function Card() {
  return (
    <div>
      <p className="my-6 px-4 text-gray-400 ">Home / <b className="text-black">Cart</b></p>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Subtotal</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">
                  <button>
                    <TextField
                      type="number"
                      defaultValue={1}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        min: 1,
                        max: 99,
                      }}
                    />
                  </button>
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">
                  <Box>
                    <IconButton color="error">
                    <CancelIcon color="error" />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="flex justify-between px-5 py-6 lg:px-0 lg:my-10">
        <button className="py-2.5 px-6 border border-[#00000080] rounded-[4px] ">
          Return To Shop
        </button>
        <div className="lg:hidden">
          <IconButton color="primary">
            <RefreshIcon color="primary" />
          </IconButton>
          <IconButton color="error">
            <DeleteForeverIcon color="error" />
          </IconButton>
        </div>

        <div className="hidden lg:flex poppins font-normal text-[18px] gap-3 ">
          <button className="py-4 px-12 border border-[#00000080] rounded-[4px] ">
            Update Cart
          </button>
          <button className="py-4 px-12 border border-[#DB4444] rounded-[4px] text-[#DB4444] ">
            Remove all
          </button>
        </div>
      </div>

      <div className="my-10  flex flex-col lg:flex-row gap-10 lg:justify-between lg:items-start items-center  ">
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

        <div className="flex flex-col gap-5 lg:w-[468px] w-[90%] px-5 py-5 border border-[#000000] rounded-[4px] ">
          <h3 className="poppins text-[20px] font-semibold ">Cart Total</h3>
          <div className='flex justify-between poppins text-[18px] '>
            <p>Subtotal:</p>
            <p>$1750</p>
          </div>
          <div className='flex justify-between poppins text-[18px] '>
            <p>Shopping:</p>
            <p>Free</p>
          </div>
          <hr className="text-[#000000]  " />
          <div className='flex justify-between text-[20px] font-semibold inter'>
            <p>Total:</p>
            <p>$1750</p>
          </div>
            <button className="bg-[#DB4444] px-12 py-4 text-white rounded-[4px] poppins text-[20px] font-semibold ">Procees to checkout</button>
        </div>
      </div>
    </div>
  );
}

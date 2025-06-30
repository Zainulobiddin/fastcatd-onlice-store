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
import { useCart } from "@/store/cart/cart";
import { useEffect } from "react";
import { API } from "@/utils/config";
import arrowTop from "#/arrowTop.svg";
import arrowBottom from "#/arrowBottom.svg";
import { Link } from "react-router-dom";

export default function Card() {
  const {
    cartProducts,
    getCart,
    deleteProductFromCart,
    clearCart,
    increment,
    decrement
  } = useCart();

  useEffect(() => {
    getCart();
  }, []);

  function handleDeleteProductFromCart(id) {
    deleteProductFromCart(id);
    getCart()
  }

  function handleIncrement(id) {
    increment(id);
  }

  function handleDecrement(id) {
    decrement(id)
  }

const subtotal = cartProducts[0]?.productsInCart?.reduce((acc, item) => {
  return acc + item.product.price * item.quantity;
}, 0);

  return (
    <div>
      <p className="my-6 px-4 text-gray-400 ">
        Home / <b className="text-black">Cart</b>
      </p>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">product.quantity</TableCell>
              <TableCell align="center">Subtotal</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartProducts[0]?.productsInCart?.map((product) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box className="flex items-center gap-6 ">
                    <img
                      className="w-[50px]"
                      src={`${API}/images/${product.product.image}`}
                      alt=""
                    />
                    <p>{product.product.productName}</p>
                  </Box>
                </TableCell>
                <TableCell align="center" className="poppins font-semibold ">
                  ${product.product.price}
                </TableCell>
                <TableCell align="center">
                  <div className="flex justify-center items-center gap-4 border-[1.5px] w-[75px] m-auto py-2 rounded-[4px] border-[#00000066] ">
                    <p className="poppins">{product.quantity}</p>
                    <div className="flex flex-col gap-4 items-center">
                      <img
                        className="w-3 cursor-pointer"
                        onClick={() => handleIncrement(product?.id)}
                        src={arrowTop}
                        alt=""
                      />
                      <img
                        className="w-3 cursor-pointer"
                        onClick={() => handleDecrement(product?.id)}
                        src={arrowBottom}
                        alt=""
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell align="right">
                  ${product.product.price * product.quantity}
                </TableCell>
                <TableCell align="right">
                  <Box>
                    <IconButton
                      onClick={() => handleDeleteProductFromCart(product?.id)}
                      color="error"
                    >
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
          <IconButton color="error" onClick={clearCart}>
            <DeleteForeverIcon color="error" />
          </IconButton>
        </div>

        <div className="hidden lg:flex poppins font-normal text-[18px] gap-3 ">
          <button className="cursor-pointer py-4 px-12 border border-[#00000080] rounded-[4px] ">
            Update Cart
          </button>
          <button
            onClick={clearCart}
            className=" cursor-pointer py-4 px-12 border border-[#DB4444] rounded-[4px] text-[#DB4444] "
          >
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
          <div className="flex justify-between poppins text-[18px] ">
            <p>Subtotal:</p>
            <p>$ {subtotal?.toFixed(2)}</p>
          </div>
          <div className="flex justify-between poppins text-[18px] ">
            <p>Shopping:</p>
            <p>Free</p>
          </div>
          <hr className="text-[#000000]  " />
          <div className="flex justify-between text-[20px] font-semibold inter">
            <p>Total:</p>
            <p>${subtotal?.toFixed(2)}</p>
          </div>
          <Link to={'/checkout'}>

          <button className="bg-[#DB4444] px-12 py-4 text-white rounded-[4px] poppins text-[20px] font-semibold ">
            Procees to checkout
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

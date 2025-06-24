import star1 from "#/star1.svg";
import star2 from "#/star2.svg";
import star4 from "#/star4.svg";
import star5 from "#/star5.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SearchIcon from "@mui/icons-material/Search";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { InputAdornment, TextField } from "@mui/material";
import { useProducts } from "@/store/products/products";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AllProducts() {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full items-start md:gap-2 px-4 lg:justify-between lg:items-center my-5">
        <p>
          Home / <span>Explore Our Products</span>
        </p>
        <Box className="flex flex-col gap-2 lg:flex-row w-full ">
          <Box sx={{ minWidth: "100%" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Populary</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={}
                label="Populary"
                //   onChange={}
                className="lg:w-[200px]"
              >
                <MenuItem value={""}>Populary</MenuItem>
                <MenuItem value={""}>Populary</MenuItem>
                <MenuItem value={""}>Populary</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: "100%" }} className="lg:hidden">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Filter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={}
                label="Filter"
                //   onChange={}
              >
                <MenuItem value={""}>Populary</MenuItem>
                <MenuItem value={""}>Populary</MenuItem>
                <MenuItem value={""}>Populary</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </div>

      <div className="lg:hidden w-[100%] flex justify-start mt-5 px-4 ">
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "100%", margin: "auto" } }}
          noValidate
          autoComplete="off"
          className="w-[100%]"
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Search"
            className="border-none poppins w-[100%] "
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-10 ">
        <aside className="lg:w-[20%] w-[90%] m-auto mt-[30px] hidden lg:flex flex-col gap-2.5 ">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Category</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-[#DB4444]">
              All products
            </AccordionDetails>
            <AccordionDetails className="text-[#505050]">
              Electronics
            </AccordionDetails>
            <AccordionDetails className="text-[#505050]">
              Home & Lifestyle
            </AccordionDetails>
            <AccordionDetails className="text-[#505050]">
              Medicine
            </AccordionDetails>
            <AccordionDetails className="text-[#505050]">
              Sports & Outdoor
            </AccordionDetails>
            <AccordionDetails className="text-[#DB4444]">
              See all
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Brands</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-[#505050] flex gap-3">
              <input type="checkbox" />
              Samsung
            </AccordionDetails>
            <AccordionDetails className="text-[#505050] flex gap-3">
              <input type="checkbox" />
              Apple
            </AccordionDetails>
            <AccordionDetails className="text-[#505050] flex gap-3">
              <input type="checkbox" />
              Huawei
            </AccordionDetails>
            <AccordionDetails className="text-[#505050] flex gap-3">
              <input type="checkbox" />
              Pocco
            </AccordionDetails>
            <AccordionDetails className="text-[#505050] flex gap-3">
              <input type="checkbox" />
              Lenovo
            </AccordionDetails>
            <AccordionDetails className="text-[#DB4444] flex gap-3">
              <input type="checkbox" />
              See all
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Features</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-[#505050] flex gap-3">
              <input type="checkbox" />
              Metallic
            </AccordionDetails>
            <AccordionDetails className="text-[#505050] flex gap-3">
              <input type="checkbox" />
              Plastic cover
            </AccordionDetails>
            <AccordionDetails className="text-[#505050] flex gap-3">
              <input type="checkbox" />
              8GB Ram
            </AccordionDetails>
            <AccordionDetails className="text-[#505050] flex gap-3">
              <input type="checkbox" />
              Super power
            </AccordionDetails>
            <AccordionDetails className="text-[#505050] flex gap-3">
              <input type="checkbox" />
              Large Memory
            </AccordionDetails>
            <AccordionDetails className="text-[#DB4444] flex gap-3">
              <input type="checkbox" />
              See all
            </AccordionDetails>
          </Accordion>

          <div className="flex justify-center border-[1px] border-[#DB4444] rounded-[4px] my-2.5  ">
            <button className="py-2.5 font-semibold poppins text-[#DB4444] text-[18px] ">
              Apply
            </button>
          </div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Condition</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-[#505050] flex gap-3">
              <input type="radio" />
              Any
            </AccordionDetails>
            <AccordionDetails className="text-[#505050] flex gap-3">
              <input type="radio" />
              Refurbished
            </AccordionDetails>
            <AccordionDetails className="text-[#505050] flex gap-3">
              <input type="radio" />
              Brand new
            </AccordionDetails>
            <AccordionDetails className="text-[#505050] flex gap-3">
              <input type="radio" />
              Old items
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Features</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-[#505050] flex gap-3">
              <input type="checkbox" />
              <img src={star1} alt="" />
            </AccordionDetails>

            <AccordionDetails className="text-[#505050] flex gap-3">
              <input type="checkbox" />
              <img src={star2} alt="" />
            </AccordionDetails>

            <AccordionDetails className="text-[#505050] flex gap-3">
              <input type="checkbox" />
              <img src={star4} alt="" />
            </AccordionDetails>

            <AccordionDetails className="text-[#505050] flex gap-3">
              <input type="checkbox" />
              <img src={star5} alt="" />
            </AccordionDetails>
          </Accordion>
        </aside>

        <div className=" lg:w-[75%] flex flex-wrap lg:flex-row items-center lg:justify-between py-8 gap-3.5 w-[90%] m-auto justify-center  ">
          {products?.products?.map((product) => (
            <div className="flex flex-col gap-2">
              <div
                key={product.id}
                className="group w-[270px] h-[250px] bg-[#F5F5F5] rounded-[4px] relative overflow-hidden"
              >
                <div className="flex justify-between px-3 py-3">
                  <p className="px-3 bg-[#DB4444] h-[26px] text-[#FAFAFA] rounded-[4px] ">
                    -{product.discountPrice}%
                  </p>
                  <div className="flex flex-col gap-2">
                    <FavoriteBorderIcon />
                    <RemoveRedEyeIcon />
                  </div>
                </div>

                <img
                  className="m-auto w-[170px] h-[140px] mt-[-30px]"
                  src={`http://37.27.29.18:8002/images/${product.image}`}
                  alt=""
                />

                <button className="absolute bottom-0 left-0 w-full mt-4 bg-black text-white py-2 font-normal poppins opacity-0 group-hover:opacity-100 transition duration-300">
                  Add To Cart
                </button>
              </div>

              <h4>
                <b>{product.productName}</b>
              </h4>
              <div className="flex gap-3 items-center font-normal poppins">
                <p className="text-[#DB4444]  ">${product.price}</p>
                <p className="text-[#727171]">{product.pray2}</p>
              </div>
              <div className="flex gap-2">
                <img src={star1} alt="" />
                <p className="text-[#727171]">({product.quantity})</p>
              </div>
            </div>
          ))}

          <div className="flex justify-start lg:justify-center px-4">
            <Link to={"/all-products"}>
              <button className="px-12 py-4 cursor-pointer bg-[#DB4444] text-[#FAFAFA] rounded-[4px] font-normal poppins  ">
                More Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

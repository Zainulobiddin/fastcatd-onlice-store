import star2 from "#/star2.svg";
import car from "#/car.svg";
import info from "#/info.svg";
import info1 from "#/info1.svg";
import reload from "#/reload.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export default function Info() {
  return (
    <div>
        <p className="my-6 px-4">
          Account / Gaming / <span>Havic HV G-92 Gamepad</span>
        </p>

      <div className="flex flex-col  lg:flex-row gap-5 my-10">
    
        <div className="flex lg:flex-col items-center gap-4 lg:justify-between justify-center ">
          <img
            className="lg:px-6 lg:py-3 px-2.5 py-1.5 bg-[#F5F5F5] rounded-[4px] w-[80px] lg:w-[261px] "
            src={info1}
            alt=""
          />
          <img
            className="lg:px-6 lg:py-3 px-2.5 py-1.5 bg-[#F5F5F5] rounded-[4px] w-[80px] lg:w-[261px] "
            src={info1}
            alt=""
          />
          <img
            className="lg:px-6 lg:py-3 px-2.5 py-1.5 bg-[#F5F5F5] rounded-[4px] w-[80px] lg:w-[261px] "
            src={info1}
            alt=""
          />
          <img
            className="lg:px-6 lg:py-3 px-2.5 py-1.5 bg-[#F5F5F5] rounded-[4px] w-[80px] lg:w-[261px] "
            src={info1}
            alt=""
          />
        </div>

        <img className="px-7 bg-[#F5F5F5] rounded-[4px] w-[90%] m-auto lg:w-full lg:h-full " src={info} alt="" />

        <div className="flex flex-col gap-5 lg:ml-[40px] px-4 ">
          <p>Havic HV G-92 Gamepad </p>
          <div className="flex gap-3" >
            <img src={star2} alt="" />
            <p>(150 Reviews)</p>
            <p>|</p>
            <p>In Stock</p>
          </div>
          <h3>$192.00</h3>
          <p className="text-[14px]  ">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <hr />
          <div>
            <p>Colors: </p>
          </div>
          <div className="flex gap-5 items-center">
            <p>Size: </p>
            <div className="flex gap-3">
              <p className="px-[11px] py-[6px] border-[1px] border-[#00000080] rounded-[4px] hover:bg-[#DB4444] hover:text-white ">XS</p>
              <p className="px-[11px] py-[6px] border-[1px] border-[#00000080] rounded-[4px] hover:bg-[#DB4444] hover:text-white ">S</p>
              <p className="px-[11px] py-[6px] border-[1px] border-[#00000080] rounded-[4px] hover:bg-[#DB4444] hover:text-white ">M</p>
              <p className="px-[11px] py-[6px] border-[1px] border-[#00000080] rounded-[4px] hover:bg-[#DB4444] hover:text-white ">L</p>
              <p className="px-[11px] py-[6px] border-[1px] border-[#00000080] rounded-[4px] hover:bg-[#DB4444] hover:text-white ">Xl</p>
            </div>
          </div>

          <div className="flex justify-between  ">
            <div className="flex border-[1px] border-[#00000080] rounded-[4px] items-center">
              <button className="px-2.5 py-2 bg-[#DB4444] font-semibold">-</button>
              <p className="w-[80px] text-center ">2</p>
              <button className="px-2.5 py-2 bg-[#DB4444] text-white font-semibold ">+</button>
            </div>

            <button className="bg-[#DB4444] poppins py-2.5 px-7 lg:px-12 rounded-[4px] text-white  ">Buy Now</button>

            <button className="border-[1px] rounded-[4px] border-[#00000080] px-2.5 ">
              <FavoriteBorderIcon />
            </button>
          </div>

          <div className="border-[1px] border-[#00000080] rounded-[4px] flex flex-col gap-3 ">
            <div className="flex gap-4 px-5 py-4">
              <img src={car} alt="" />
              <div>
                <h4>Free Delivery</h4>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <hr />
            <div className="flex gap-4 px-5 py-4">
              <img src={reload} alt="" />
              <div>
                <h4>Return Delivery</h4>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

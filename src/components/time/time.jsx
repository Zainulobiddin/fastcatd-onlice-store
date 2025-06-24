export default function Time() {
  return (
    <div className="flex items-center gap-4  ">
        <div className="flex items-center flex-col gap-2">
            <p className="text-[12px] font-medium poppins  ">Days</p>
            <h2 className="font-bold text-[32px] leading-[30px] tracing-[4%] inter ">03</h2>
        </div>
        <p className="text-[#E07575] text-[26px] ">:</p>
        <div className="flex items-center flex-col gap-2">
            <p className="text-[12px] font-medium poppins  ">Hours</p>
            <h2 className="font-bold text-[32px] leading-[30px] tracing-[4%] inter ">23</h2>
        </div>
        <p className="text-[#E07575] text-[26px] ">:</p>
        <div className="flex items-center flex-col gap-2">
            <p className="text-[12px] font-medium poppins  ">Minutes</p>
            <h2 className="font-bold text-[32px] leading-[30px] tracing-[4%] inter ">19</h2>
        </div>
        <p className="text-[#E07575] text-[26px] ">:</p>
         <div className="flex items-center flex-col gap-2">
            <p className="text-[12px] font-medium poppins  ">Seconds</p>
            <h2 className="font-bold text-[32px] leading-[30px] tracing-[4%] inter ">56</h2>
        </div>

    </div>
  )
}

export default function CardRed({title}) {
  return (
    <div className="flex items-center gap-4 ">
        <p className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]  "></p>
        <h2 className="font-semibold poppins text-[#DB4444]  ">{title}</h2>
    </div>
  )
}


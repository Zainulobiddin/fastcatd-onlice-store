export default function Free({src, title, children}) {
  return (
    <div className="flex flex-col gap-6 items-center">
        <img src={src} alt="" />
        <div className="flex flex-col gap-2 items-center">
            <h3 className="text-[20px] font-semibold poppins ">{title}</h3>
            <p>{children}</p>
        </div>
    </div>
  )
}

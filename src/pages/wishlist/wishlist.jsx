import CardRed from "@/components/card-red/card-red";

export default function Wishlist() {
  return (
    <div className="my-12">
      <div className="flex justify-between items-center px-4 ">
        <p>Wishlist </p>
        <button className="px-12 py-4 border-[1px] border-[#00000080] rounded-[4px] ">
          Move All To Bag
        </button>
      </div>

        {/* ---------------------- */}
      <div className="flex justify-between items-center px-4">
        <CardRed title={"Just For You"} />
        <button className="px-12 py-4 border-[1px] border-[#00000080] rounded-[4px] ">
          See All
        </button>
      </div>
    </div>
  );
}

import { BsFillCartXFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSideBar } from "../SideBarProvider/SideBarProvider";

const CartEmpty = () => {
  const { setSideBar } = useSideBar();
  return (
    <div className="flex flex-col justify-center items-center mt-8 gap-4 text-gray-500">
      <BsFillCartXFill size={85} color="#ededed" />
      <p>سبد خرید شما خالی است</p>
      <Link
        onClick={() => setSideBar(null)}
        to="./shop"
        className="bg-[#004941] inline-block text-center text-white p-2 mt-4 cursor-pointer hover:bg-[#0c7b6e]"
      >
        بازگشت به فروشگاه
      </Link>
    </div>
  );
};

export default CartEmpty;

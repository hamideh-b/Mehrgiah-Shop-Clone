import { FaBars } from "react-icons/fa6";
import Logo from "../../assets/Images/لوگو-مهرگیاه.png";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useSideBar } from "../SideBarProvider/SideBarProvider";
const MobileHeader = ({ isOpen, cartCount }) => {
  const { setSideBar } = useSideBar();

  useEffect(() => {
    const sizeHandler = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setSideBar(null);
      }
    };
    window.addEventListener("resize", sizeHandler);
    return () => {
      window.removeEventListener("resize", sizeHandler);
    };
  }, [isOpen, setSideBar]);

  return (
    <>
      <nav className="flex justify-between items-center px-5 fixed top-0 left-0 w-screen z-10 bg-white border-b border-gray-200 ">
        <div
          onClick={() => setSideBar("menu")}
          className="flex justify-between items-center gap-2 cursor-pointer hover:text-gray-700"
        >
          <FaBars size={20} />
          <span>منو</span>
        </div>
        <div className="cursor-pointer">
          <Link
            className="block w-full h-full"
            to="./"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={Logo} alt="" className="h-14 cursor-pointer" />
          </Link>
        </div>
        <div
          onClick={() => setSideBar("cart")}
          className="flex justify-around items-center gap-2 cursor-pointer hover:text-gray-700"
        >
          <div className="relative">
            <HiOutlineShoppingBag size={25} className="" />
            <div className=" h-5 w-5 leading-4 text-center bg-[#004941] rounded-full text-white absolute -top-2 -left-2 text-sm">
              {cartCount}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileHeader;

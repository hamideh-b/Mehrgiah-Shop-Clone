import { Link } from "react-router-dom";
import Logo from "../../assets/Images/لوگو-مهرگیاه.png";
import Skeleton from "react-loading-skeleton";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useSideBar } from "../SideBarProvider/SideBarProvider";

const CompactDesktopHeader = ({
  navBar,
  loading,
  error,
  cartCount,
  totalPrice,
}) => {
  const { setSideBar } = useSideBar();
  return (
    <div className="fixed top-0 left-0 w-screen z-50 border-t border-b border-gray-200 bg-white transition-all duration-300 lg:px-8 xl:px-16 2xl:px-36">
      <div className="flex justify-between items-center  ">
        <div className="">
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="block w-full h-full"
            to="./"
          >
            <img src={Logo} alt="" className="h-14 cursor-pointer" />
          </Link>
        </div>

        {error ? <h2 className="text-red-500 mx-auto">{error}</h2> : null}
        <nav className="">
          {loading ? (
            <ul className="flex gap-10 justify-start">
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} width={100} height={40} />
              ))}
            </ul>
          ) : (
            <ul className="flex gap-10 justify-start">
              {navBar?.map((item) => (
                <li key={item.id} className="laedin-12 text-lg">
                  <Link className="block w-full h-full" to={item.link}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
        <div className="flex justify-around items-center px-4 gap-10">
          <div
            className="text-left text-lg cursor-pointer hover:text-gray-700"
            onClick={() => setSideBar("auth")}
          >
            ورود/ثبت نام
          </div>
          <div
            onClick={() => setSideBar("cart")}
            className="flex justify-around items-center gap-2 cursor-pointer hover:text-gray-700"
          >
            <div className="relative">
              <HiOutlineShoppingBag size={25} className="" />
              <div className=" h-5 w-5 leading-4 text-center bg-[#004941] rounded-full text-white absolute text-sm -top-2 -left-2">
                {cartCount}
              </div>
            </div>
            <span className="text-lg">{totalPrice.toLocaleString()} تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompactDesktopHeader;

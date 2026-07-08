import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Images/لوگو-مهرگیاه.png";
import { FaAngleDown, FaBagShopping, FaBars } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useSideBar } from "../SideBarProvider/SideBarProvider";
import { useState } from "react";

const DesktopHeader = ({
  navBar,
  products,
  loading,
  error,
  cartCount,
  totalPrice,
}) => {
  const { setSideBar } = useSideBar();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const searchHandler = () => {
    if (!search.trim()) return;

    navigate(`/search?q=${encodeURIComponent(search.trim())}`);
  };
  return (
    <div className="fixed top-0 left-0 w-screen z-50 bg-white lg:px-8 xl:px-16 2xl:px-36">
      <div className="flex justify-between items-center  ">
        <div className="">
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="block w-full h-full"
            to="./"
          >
            <img src={Logo} alt="" className="h-20 cursor-pointer" />
          </Link>
        </div>

        <div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchHandler();
                setSearch("")
              }
            }}
            value={search}
            type="text"
            size={58}
            placeholder="جستوجو"
            className="text-right p-2 border border-gray-300 rounded-md outline-none"
          />
        </div>

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

      {error ? <h2 className="text-red-600 text-center">{error}</h2> : null}
      <nav className="border-t border-b border-gray-200 ">
        {loading ? (
          <nav className="flex gap-10 justify-start">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} width={100} height={40} />
            ))}
          </nav>
        ) : (
          <ul className="flex gap-10 justify-start">
            {products && (
              <li className="p-3 bg-[#004941] text-white relative cursor-pointer rounded-t-md group">
                <div className="flex gap-16 justify-between text-lg ">
                  <FaBars size={25} />
                  <span>{products.name}</span>
                  <FaAngleDown size={20} />
                </div>
                <div className="absolute top-full w-full bg-white left-0 border border-b-0 border-gray-200 hidden group-hover:block">
                  <ul className="">
                    {products?.dropdown?.map((item) => (
                      <li
                        key={item.id}
                        className="leading-12 pr-3 text-black border-b-2 border-gray-200 cursor-pointer hover:bg-gray-100"
                      >
                        <Link className="block w-full h-full" to={item.link}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )}
            {navBar?.map((item) => (
              <li key={item.id} className="leading-12 text-lg">
                <Link className="block w-full h-full" to={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default DesktopHeader;

import { Link, useNavigate } from "react-router-dom";
import { useSideBar } from "../SideBarProvider/SideBarProvider";
import { useSelector } from "react-redux";
import { useState } from "react";
import SideBarDrawer from "../SideBarDrawer/SideBarDrawer";
import Skeleton from "react-loading-skeleton";
import { FaSearch } from "react-icons/fa";

const MobileSideBar = () => {
  const { data, loading, error } = useSelector((state) => state.menu);
  const navBar = data?.navBar;
  const products = data?.products;
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const searchHandler = () => {
    if (!search.trim()) return;
    navigate(`/search?q=${encodeURIComponent(search.trim())}`);
    setSideBar(null);
  };
  const { sideBar, setSideBar, active, setActive } = useSideBar();
  return (
    <>
      <SideBarDrawer
        side="left"
        open={sideBar === "menu"}
        onClose={() => setSideBar(null)}
      >
        <div className="relative">
          <input
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchHandler();
                setSearch("");
              }
            }}
            value={search}
            type="text"
            placeholder="جستوجو"
            className="block w-full text-right p-4   outline-none"
          />
          <button
            onClick={() => {
              searchHandler();
              setSearch("");
            }}
            className="p-2  absolute top-1/2  left-3 -translate-y-1/2 cursor-pointer hover:bg-gray-200 rounded-full"
          >
            <FaSearch className="text-gray-500" />
          </button>
        </div>
        <div className="flex items-center cursor-pointer">
          <div
            className={`w-1/2  text-center py-4 hover:border-b-2 hover:border-[#004941] ${active === "nav" ? `bg-gray-300` : `bg-gray-100`}`}
            onClick={() => setActive("nav")}
          >
            <span>منو</span>
          </div>
          <div
            className={`w-1/2  text-center py-4 hover:border-b-2 hover:border-[#004941] ${active === "products" ? `bg-gray-300` : `bg-gray-100`}`}
            onClick={() => setActive("products")}
          >
            دسته بندی
          </div>
        </div>
        {error ? (
          <h2 className="text-red-600 text-center mt-4">{error}</h2>
        ) : null}
        {active === "nav" && (
          <ul>
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton key={index} height={40} />
                ))
              : navBar?.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => setSideBar(null)}
                    className="leading-12 pr-3 text-sm border-b-2 border-gray-200 cursor-pointer hover:bg-gray-100/50"
                  >
                    <Link className="block w-full h-full" to={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))}
            {}
            <li
              onClick={() => setSideBar("auth")}
              className="leading-12 pr-3 text-sm border-b-2 border-gray-200 cursor-pointer hover:bg-gray-100/50"
            >
              <div className="block w-full h-full" to="./account">
                ورود/ثبت نام
              </div>
            </li>
          </ul>
        )}
        {active === "products" && (
          <ul className="">
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton key={index} height={40} />
                ))
              : products?.dropdown?.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => setSideBar(null)}
                    className="leading-12 pr-3 text-sm text-black border-b-2 border-gray-200 cursor-pointer hover:bg-gray-100/50"
                  >
                    <Link className="block w-full h-full" to={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))}
            <li></li>
          </ul>
        )}
      </SideBarDrawer>
    </>
  );
};

export default MobileSideBar;

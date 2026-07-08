import { useSideBar } from "../SideBarProvider/SideBarProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import LogInForm from "./LogInForm";
import SideBarDrawer from "../SideBarDrawer/SideBarDrawer";

const AccountSideBar = () => {
  const { sideBar, setSideBar } = useSideBar();
  return (
    <>
      <SideBarDrawer
        side="left"
        open={sideBar === "auth"}
        onClose={() => setSideBar(null)}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 text-lg text-gray-800">
          <h2>ورود</h2>
          <button
            className="cursor-pointer group"
            onClick={() => setSideBar(null)}
          >
            <RiCloseLargeFill className="group-hover:text-gray-500" size={22} />
          </button>
        </div>
        <div className="p-4">
          <LogInForm />
        </div>
        <div className="text-center p-4 border-t border-gray-200">
          <p className="font-bold">هنوز حساب کاربری ندارید؟</p>
          <Link
            onClick={() => setSideBar(null)}
            to="./create-account"
            className="bg-[#004941] inline-block text-center text-white p-2 mt-4 cursor-pointer hover:bg-[#0c7b6e]"
          >
            ایجاد حساب کاربری
          </Link>
        </div>
      </SideBarDrawer>
    </>
  );
};

export default AccountSideBar;

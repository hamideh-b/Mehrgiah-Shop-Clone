import { useEffect } from "react";
import { useSideBar } from "../SideBarProvider/SideBarProvider";

const SideBarDrawer = ({ side, open, children, onClose }) => {
  const { setSideBar } = useSideBar();

  useEffect(() => {
    const sizeHandler = () => {
      if (window.innerWidth >= 1024 && open) {
        setSideBar(null);
      }
    };
    document.body.style.overflow = open ? "hidden" : "auto";
    window.addEventListener("resize", sizeHandler);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", sizeHandler);
    };
  }, [open, setSideBar]);

  const position = side === "left" ? "left-0" : "right-0";
  const translate = open
    ? "translate-x-0"
    : side === "left"
      ? "-translate-x-full"
      : "translate-x-full";

  return (
    <>
      <div
        className={`fixed  top-0 ${position} w-72 md:w-80 xl:w-87.5 h-full  bg-white z-60 transition-transform duration-300 ${translate}`}
      >
        {children}
      </div>
      {open && (
        <div
          onClick={onClose}
          className=" bg-black/50 fixed inset-0 z-50"
        ></div>
      )}
    </>
  );
};

export default SideBarDrawer;

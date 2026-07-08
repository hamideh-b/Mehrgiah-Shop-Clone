import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);
  const scrollHandler = () => {
    const checkShow = window.scrollY > 200;
    setShow((prev) => (prev === checkShow ? prev : checkShow));
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    show && (
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-16 lg:bottom-5 left-3 z-50 p-2 rounded-full bg-white shadow-black/30 shadow-xl cursor-pointer group hover:bg-gray-300`}
      >
        <IoIosArrowUp size={30} className="group-hover:text-white" />
      </div>
    )
  );
};

export default ScrollToTopButton;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuSlice } from "../../Redux/menu/menuSlice";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import CompactDesktopHeader from "./CompactDesktopHeader";
import { useSideBar } from "../SideBarProvider/SideBarProvider";

const Header = () => {
  const { data, loading, error } = useSelector((state) => state.menu);
  const navBar = data?.navBar;
  const products = data?.products;
  const { sideBar } = useSideBar();
  const [scroll, setScroll] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const dispatch = useDispatch();
  const scrollCheck = () => {
    setScroll(window.scrollY > 150);
  };

  useEffect(() => {
    dispatch(menuSlice.actions.fetchData());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", scrollCheck);
    return () => {
      window.removeEventListener("scroll", scrollCheck);
    };
  }, []);
  const headerProps = {
    navBar,
    products,
    loading,
    error,
    cartCount,
    totalPrice,
  };

  return (
    <header>
      <div className="lg:hidden">
        <MobileHeader {...headerProps} isOpen={sideBar === "menu"} />
      </div>
      <div className="hidden lg:block">
        {scroll ? (
          <CompactDesktopHeader {...headerProps} />
        ) : (
          <DesktopHeader {...headerProps} />
        )}
      </div>
    </header>
  );
};

export default Header;

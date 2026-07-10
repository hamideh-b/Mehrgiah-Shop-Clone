import { BsArrowClockwise } from "react-icons/bs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header/Header";
import Home from "../Pages/Home/Home";
import Footer from "../Components/Footer/Footer";
import BottomNav from "../Components/BottomNav/BottomNav";
import ScrollToTopButton from "../Components/ScrollToTopButton/ScrollToTopButton";
import SideBarProvider from "../Components/SideBarProvider/SideBarProvider";
import MobileSideBar from "../Components/MobileSideBar/MobileSideBar";
import AboutUS from "../Pages/AboutUS/AboutUS";
import ContactUS from "../Pages/ContactUS/ContactUS";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import AccountSideBar from "../Components/AccountSideBar/AccountSideBar";
import CreateAccount from "../Pages/CreateAccount/CreateAccount";
import Shop from "../Pages/Shop/Shop";
import CartSideBar from "../Components/CartSideBar/CartSideBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Search from "../Pages/Search/Search";
import ProdutPage from "../Pages/ProdutPage/ProdutPage";

const App = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <BrowserRouter>
      <SideBarProvider>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUS />} />
          <Route path="/contact-us" element={<ContactUS />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/shop/:category/:slug" element={<ProdutPage />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <BottomNav />
        <MobileSideBar />
        <AccountSideBar />
        <CartSideBar />
        <ScrollToTopButton />
        <Footer />
      </SideBarProvider>
    </BrowserRouter>
  );
};

export default App;

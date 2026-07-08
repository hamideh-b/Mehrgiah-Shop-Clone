import { RiCloseLargeFill } from "react-icons/ri";
import SideBarDrawer from "../SideBarDrawer/SideBarDrawer";
import { useSideBar } from "../SideBarProvider/SideBarProvider";
import CartEmpty from "./CartEmpty";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const CartSideBar = () => {
  const { sideBar, setSideBar } = useSideBar();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <SideBarDrawer
      side="left"
      open={sideBar === "cart"}
      onClose={() => setSideBar(null)}
    >
      <section className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 text-lg text-gray-800">
          <h2>سبد خرید</h2>
          <button
            className="cursor-pointer group"
            onClick={() => setSideBar(null)}
          >
            <RiCloseLargeFill className="group-hover:text-gray-500" size={22} />
          </button>
        </div>
        {cartItems.length === 0 && <CartEmpty />}
        <ul className="flex-1 overflow-auto">
          {cartItems.map((item) => {
            const price = item.price * item.quantity;
            return <CartItems key={item.id} item={item} price={price} />;
          })}
        </ul>
        {cartItems.length > 0 && (
          <section className=" bg-white w-full  pb-4">
            <div className="flex justify-between p-4  text-2xl border-y border-gray-300">
              <p>مجموع: </p>
              <p className="text-green-900">
                {totalPrice.toLocaleString()} تومان
              </p>
            </div>
            <div className="text-center">
              <button className="bg-[#004941] text-center text-white mt-4 py-2 w-3/4  cursor-pointer hover:bg-[#0c7b6e]">
                تسویه حساب
              </button>
            </div>
          </section>
        )}
      </section>
    </SideBarDrawer>
  );
};

export default CartSideBar;

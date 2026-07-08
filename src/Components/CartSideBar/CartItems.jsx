import { RiCloseLargeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import CartCounter from "./CartCounter";
import { useSideBar } from "../SideBarProvider/SideBarProvider";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/cartSlice/cartSlice";

const CartItems = ({ item, price }) => {
  const { setSideBar } = useSideBar();

  const dispatch = useDispatch();
  return (
    <li className="hover:bg-gray-100 group relative border-b border-gray-300 p-4">
      <button
        onClick={() => {
          dispatch(removeFromCart(item.id));
        }}
        className="hover:bg-white rounded-4xl p-2 cursor-pointer absolute top-3 left-1"
      >
        <RiCloseLargeFill className="" size={14} />
      </button>

      <div className="flex gap-2 items-start">
        <Link
          onClick={() => setSideBar(null)}
          to={`./shop/${item.category}/${item.slug}`}
        >
          <img src={item.img} alt={item.title} className="block w-20" />
        </Link>
        <div className="flex flex-col gap-2 items-start">
          <Link
            onClick={() => setSideBar(null)}
            to={`./shop/${item.category}/${item.slug}`}
          >
            <h3 className="text-gray-500 text-lg w-11/12 group-hover:text-green-500">
              {item.title}
            </h3>
          </Link>
          <CartCounter product={item} />
          <p className="text-green-900 ">{price.toLocaleString()} تومان</p>
        </div>
      </div>
    </li>
  );
};
export default CartItems;

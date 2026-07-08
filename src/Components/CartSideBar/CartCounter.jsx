import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../Redux/cartSlice/cartSlice";

const CartCounter = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex h-10 text-gray-500 border border-gray-300 rounded-lg overflow-hidden">
      <button
        onClick={() => dispatch(increaseQuantity(product.id))}
        className="  px-2 hover:bg-[#004941] cursor-pointer hover:text-white"
      >
        <FaPlus size={10} />
      </button>
      <div className="w-10 px-2 border-x border-gray-300 leading-9 text-center">
        {product.quantity || 1}
      </div>
      <button
        onClick={() => dispatch(decreaseQuantity(product.id))}
        className=" px-2 hover:bg-[#004941] cursor-pointer hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <FaMinus size={10} />
      </button>
    </div>
  );
};

export default CartCounter;

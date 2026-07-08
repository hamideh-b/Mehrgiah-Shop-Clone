import { FaMinus, FaPlus } from "react-icons/fa";
const CounterButton = ({ count, setCount }) => {
  return (
    <div className="flex h-10 text-gray-500 border border-gray-300 rounded-lg overflow-hidden">
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="  px-2 hover:bg-[#004941] cursor-pointer hover:text-white"
      >
        <FaPlus size={10} />
      </button>
      <div className="w-10 px-2 border-x border-gray-300 leading-9 text-center">
        {count}
      </div>
      <button
        onClick={() => setCount((prev) => prev - 1)}
        disabled={count === 1}
        className=" px-2 hover:bg-[#004941] cursor-pointer hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <FaMinus size={10} />
      </button>
    </div>
  );
};

export default CounterButton;

import { FaLeaf } from "react-icons/fa";

const LeafIcon = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-[0.5px] bg-black grow"></div>
      <FaLeaf />
      <div className="flex-1 h-[0.5px] bg-black "></div>
    </div>
  );
};

export default LeafIcon;

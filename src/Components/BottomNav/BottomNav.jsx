import { FaBars, FaRegUser } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import Skeleton from "react-loading-skeleton";
import BottomNavItem from "./BottomNavItem";
import { SlHome } from "react-icons/sl";
import { useSelector } from "react-redux";

const BottomNav = () => {
  const { data, loading, error } = useSelector((state) => state.menu);
  const bottomNav = data?.bottomNav;
  const icons = {
    bars: FaBars,
    shop: SiHomeassistantcommunitystore,
    home: SlHome,
    phone: FiPhoneCall,
    user: FaRegUser,
  };
  return (
    <>
      <div className="lg:hidden h-14 flex gap-5 justify-between items-center px-5 fixed bottom-0 left-0 w-screen z-10 bg-white border-t border-gray-200 shadow-2xl text-mist-800 text-sm">
        {error ? <h2 className="text-red-500 mx-auto">{error}</h2> : null}
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} width={100} height={40} />
            ))
          : bottomNav?.map((item) => {
              const Icon = icons[item.icon];
              return <BottomNavItem key={item.id} item={item} Icon={Icon} />;
            })}
      </div>
    </>
  );
};

export default BottomNav;

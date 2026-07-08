import { Link } from "react-router-dom";
import ItemContent from "./ItemContent";
import { useSideBar } from "../SideBarProvider/SideBarProvider";

const BottomNavItem = ({ item, Icon }) => {
  const { setSideBar } = useSideBar();
  const ScrollHandler = () => {
    if (item.scrollToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  switch (item.type) {
    case "action": {
      return (
        <div onClick={() => setSideBar("menu")}>
          <ItemContent name={item.name} Icon={Icon} />
        </div>
      );
    }
    case "link": {
      return (
        <Link to={item.link} onClick={ScrollHandler}>
          <ItemContent name={item.name} Icon={Icon} />
        </Link>
      );
    }
    case "tel": {
      return (
        <a key={item.id} href={`tel:${item.value}`}>
          <ItemContent name={item.name} Icon={Icon} />
        </a>
      );
    }
    case "account": {
      return (
        <div onClick={() => setSideBar("auth")}>
          <ItemContent name={item.name} Icon={Icon} />
        </div>
      );
    }
    default:
      return <ItemContent name={item.name} Icon={Icon} />;
  }
};

export default BottomNavItem;

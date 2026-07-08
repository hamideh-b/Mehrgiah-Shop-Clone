import {
  FaEnvelope,
  FaMailBulk,
  FaMapMarkerAlt,
  FaPhoneSquare,
} from "react-icons/fa";
import LeafIcon from "../LeafIcon/LeafIcon";
const icons = {
  email: FaMailBulk,
  address: FaMapMarkerAlt,
  phone: FaPhoneSquare,
  post: FaEnvelope,
};
const ContactItem = ({ item, showDivider }) => {
  return (
    <div>
      {item.title && <h2 className="text-lg py-4">{item.title}</h2>}
      {item.list?.map((data) => {
        const Icon = icons[data.icon];
        return (
          <div
            key={data.id}
            className={`flex gap-2 ${item.type === "media" ? "font-bold" : null}`}
          >
            {Icon && <Icon className="self-center text-[#005320] text-xl" />}
            <p className="whitespace-pre-line text-[#777777]">
              {data.description}
            </p>
          </div>
        );
      })}
      {showDivider && (
        <div className="lg:hidden mt-8">
          <LeafIcon />
        </div>
      )}
    </div>
  );
};

export default ContactItem;

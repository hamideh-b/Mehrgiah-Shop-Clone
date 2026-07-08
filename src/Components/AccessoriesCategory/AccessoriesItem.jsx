import { Link } from "react-router-dom";

const AccessoriesItem = ({ id, link, name, img }) => {
  return (
    <div className="" key={id}>
      <Link to={link}>
        <div className="overflow-hidden rounded-2xl">
          <img
            src={img}
            alt={name}
            className="block  object-cover transition-all duration-300 scale-110 hover:scale-100"
          />
        </div>
      </Link>
      <h3 className="text-center text-lg my-6 ">
        <Link to={link} className="border-b-2 border-gray-200">
          {name}
        </Link>
      </h3>
    </div>
  );
};

export default AccessoriesItem;

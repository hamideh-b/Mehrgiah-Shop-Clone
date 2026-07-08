const ItemContent = ({Icon,name}) => {
  return (
    <div  className="flex flex-col justify-between items-center  cursor-pointer hover:text-gray-600 px-3">
      {Icon && <Icon size={20} />}
      <span>{name}</span>
    </div>
  );
};

export default ItemContent;

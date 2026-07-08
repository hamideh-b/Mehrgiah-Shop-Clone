const AccessoriesCategoryHeader = ({ accessoryIcon }) => {
  return (
    <div className="flex flex-col items-center my-8">
      <h2 className="text-2xl ">اکسسوری و هدایا</h2>
      <img src={accessoryIcon} alt="icon" />
    </div>
  );
};

export default AccessoriesCategoryHeader;

const AddToCartButton = ({ cartHandler }) => {
  return (
    <button
      onClick={cartHandler}
      className="bg-[#004941]  text-center text-white  py-2 px-6  cursor-pointer hover:bg-[#0c7b6e]"
    >
      افزودن به سبد خرید
    </button>
  );
};

export default AddToCartButton;

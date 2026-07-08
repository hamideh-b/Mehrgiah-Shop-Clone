const ProductCategoreisHeader = ({ procategory }) => {
  return (
    <div className="flex flex-col items-center my-8">
      <h2 className="text-2xl ">دسته بندی محصولات</h2>
      <img src={procategory} alt="icon" />
    </div>
  );
};

export default ProductCategoreisHeader;

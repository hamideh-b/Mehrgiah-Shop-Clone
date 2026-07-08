import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productCategoriesSlice } from "../../Redux/productCatagoreis/productCatagoreisSlice";
import procategory from "../../assets/Images/Icon1.png";
import ProductItem from "./ProductItem";
import Loading from "./Loading";
import ProductCategoreisHeader from "./ProductCategoreisHeader";

const ProductCategoreis = () => {
  const { data, loading, error } = useSelector(
    (state) => state.productCategories,
  );
  const showSkeleton = loading && data?.length === 0;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!data?.length) {
      dispatch(productCategoriesSlice.actions.fetchData());
    }
  }, [dispatch, data]);

  return (
    <section className="my-8">
      <ProductCategoreisHeader procategory={procategory} />
      {error && <div className="text-center text-red-500 mb-4">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-5 md:px-12 xl:px-16">
        {showSkeleton
          ? Array.from({ length: 4 }).map((_, index) => <Loading key={index} />)
          : null}

        {data?.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductCategoreis;

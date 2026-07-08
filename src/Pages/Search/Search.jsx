import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import ProductsGrid from "../../Components/ShopContainer/ProductsGrid";
import { useEffect } from "react";
import { allProductsSlice } from "../../Redux/allProducts/allProducts";

const Search = () => {
  const { data, loading, error } = useSelector((state) => state.allProducts);
  const products = data?.products || [];
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q");
  const dispatch = useDispatch();
  const filteredProducts = products.filter((product) =>
    product.title.includes(keyword),
  );
  useEffect(() => {
    if (!products.length) {
      dispatch(allProductsSlice.actions.fetchData());
    }
  }, [dispatch, products.length]);

  return (
    <main className="mt-14 lg:mt-28">
      <section className="lg: p-4 lg:flexlg:px-8 xl:px-16 2xl:px-36">
        {!loading && filteredProducts.length ? (
          <ProductsGrid
            products={filteredProducts}
            loading={loading}
            error={error}
          />
        ) : (
          <div className="flex flex-col justify-center items-center gap-4 m-8">
            <h2 className=" text-[#004941] text-lg">
              {`هیچ محصولی مرتبط با "${keyword}" پیدا نشد.`}
            </h2>
            <Link
              to="/shop"
              className="bg-[#004941] inline-block text-center text-white py-2 px-6 mt-4 cursor-pointer hover:bg-[#0c7b6e]"
            >
              بازگشت به فروشگاه
            </Link>
          </div>
        )}
      </section>
    </main>
  );
};

export default Search;

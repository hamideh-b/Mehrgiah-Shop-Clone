import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { useSideBar } from "../SideBarProvider/SideBarProvider";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice/cartSlice";

const ProductsGrid = ({ products, loading, error }) => {
  const { setSideBar } = useSideBar();
  const dispatch = useDispatch();
  return (
    <>
      {error && <div className="text-center text-red-500 mb-4">{error}</div>}
      <section className=" mx-auto my-4  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} height={350} />
            ))
          : null}
        {products?.map((product) => {
          const cartHandler = () => {
            dispatch(addToCart({ ...product, quantity: 1 }));
            setSideBar("cart");
          };
          return (
            <div
              key={product.id}
              className="mx-auto border pb-6 lg:p-0 border-gray-300 shadow-sm rounded-lg text-center  group relative overflow-hidden"
            >
              <Link
                className="block w-full"
                to={`/shop/${product.category}/${product.slug}`}
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="block object-cover object-center  "
                />
              </Link>
              <div className=" w-full bg-white mb-4 overflow-hidden relative duration-300 -mt-6 lg:m-0 lg:group-hover:-translate-y-10 ">
                <div className=" lg:p-4">
                  <h2 className="text-center hover:text-green-800 -mt-1 mb-2">
                    <Link
                      className="block w-full h-full"
                      to={`/shop/${product.category}/${product.slug}`}
                    >
                      {product.title}
                    </Link>
                  </h2>
                  <p className="text-green-800 font-bold mb-2">{`${product.price.toLocaleString()} تومان`}</p>
                </div>
              </div>
              <div className="lg:w-3/4 lg:absolute lg:left-1/2 lg:bottom-0 lg:-translate-x-1/2 lg:translate-y-full lg:group-hover:-translate-y-1/2 duration-300 text-center">
                <AddToCartButton cartHandler={cartHandler} />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductsGrid;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { allProductsSlice } from "../../Redux/allProducts/allProducts";
import CounterButton from "../CounterButton/CounterButton";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import { addToCart } from "../../Redux/cartSlice/cartSlice";
import { useSideBar } from "../SideBarProvider/SideBarProvider";
import Skeleton from "react-loading-skeleton";

const ProductDetails = () => {
  const { data, loading, error } = useSelector((state) => state.allProducts);
  const { setSideBar } = useSideBar();
  const products = data?.products || [];
  const { category, slug } = useParams();
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const cartHandler = () => {
    dispatch(addToCart({ ...product, quantity: count }));
    setSideBar("cart");
  };
  useEffect(() => {
    if (!products.length) {
      dispatch(allProductsSlice.actions.fetchData());
    }
  }, [dispatch, products.length]);
  const product = products?.find(
    (item) => item.category === category && item.slug === slug,
  );
  if (loading || !product) {
    return (
      <section className="px-5 lg:px-8 xl:px-16 2xl:px-36 mb-8 mt-24 lg:mt-44">
        <Skeleton
          style={{ width: "100%", display: "block", margin: "0 auto" }}
          height={550}
        />
        <Skeleton width={250} />
        <Skeleton count={10} />
      </section>
    );
  }
  return (
    <section className="px-5 lg:px-8 xl:px-16 2xl:px-36 mb-8 mt-24 lg:mt-44">
      {/* {load?<Skeleton width={100} height={40}/>:null} */}
      {error ? <h2 className="text-red-600 text-center">{error}</h2> : null}
      <div className="border border-gray-300 rounded-2xl grid grid-cols-1 md:grid-cols-2 md:gap-4 overflow-hidden">
        <div>
          <img
            src={product.img}
            alt={product.title}
            className="block object-cover object-center  "
          />
        </div>
        <div className="px-4 md:py-4 flex flex-col md:justify-center">
          <h1 className="text-lg lg:text-2xl text-[#005C28]">
            {product.title}
          </h1>
          <p className="text-lg lg:text-2xl text-[#005C28] my-4">
            {product.price.toLocaleString()} تومان
          </p>
          <p className="text-lg text-[#77797B]">
            {product.ingredientsDescription}
          </p>
          <ul className=" text-[#77797B] list-disc px-4">
            {product.ingredients.map((item, index) => (
              <li key={index} className="py-2">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 my-6 justify-center md:justify-start">
            <CounterButton count={count} setCount={setCount} />
            <AddToCartButton cartHandler={cartHandler} />
          </div>
        </div>
      </div>
      <div className="my-8 p-4">
        <h2 className="text-lg text-[#005C28] my-2">{product.benefitsTitle}</h2>
        <p className="leading-8 text-[#77797B]">
          {product.benefitsDescription}
        </p>
        <ul className=" text-[#77797B] list-disc px-4">
          {product.benefits.map((item, index) => (
            <li key={index} className="py-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductDetails;

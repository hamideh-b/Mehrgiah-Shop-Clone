import AccessoriesCategory from "../../Components/AccessoriesCategory/AccessoriesCategory";
import ProductCategoreis from "../../Components/ProductCategoreis/ProductCategoreis";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <main className="mt-28 lg:mt-40">
      <Slider />
      <ProductCategoreis />
      <AccessoriesCategory />
    </main>
  );
};

export default Home;

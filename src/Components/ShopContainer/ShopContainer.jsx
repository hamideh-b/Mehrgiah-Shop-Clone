import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HeroSection from "./HeroSection";
import ProductsGrid from "./ProductsGrid";
import { allProductsSlice } from "../../Redux/allProducts/allProducts";
import FilterSideBar from "./FilterSideBar";
import Pagination from "./Pagination";
import { FaBars } from "react-icons/fa";
import { useSideBar } from "../SideBarProvider/SideBarProvider";
import SideBarDrawer from "../SideBarDrawer/SideBarDrawer";
const ShopContainer = () => {
  const { data, loading, error } = useSelector((state) => state.allProducts);
  const products = data?.products || [];
  const categoriesData = data?.categories || [];
  const { sideBar, setSideBar } = useSideBar();
  const [search, setSearch] = useState("");
  const [selectedCategories, setselectedCategories] = useState([]);
  const [price, setPrice] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const dispatch = useDispatch();
  const keyword = search.trim().toLowerCase();
  const { category } = useParams();
  const heroData = category
    ? categoriesData?.find((elem) => elem.category === category)
    : data?.shopHero;
  let filterProducts = [...products];
  if (category) {
    filterProducts = filterProducts.filter(
      (product) => product.category === category,
    );
  }
  if (keyword) {
    filterProducts = filterProducts?.filter((product) =>
      product.title.toLowerCase().includes(keyword),
    );
  }
  const notFound = keyword && filterProducts.length === 0;

  if (selectedCategories.length > 0) {
    filterProducts = filterProducts.filter((product) =>
      selectedCategories.includes(product.category),
    );
  }
  if (price) {
    filterProducts = [...filterProducts].sort((a, b) => a.price - b.price);
  }
  const totalPages = Math.ceil(filterProducts.length / itemsPerPage);

  const currentProducts = filterProducts?.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const removeFilter = () => {
    setSearch("");
    setselectedCategories([]);
    setPrice(false);
    setCurrentPage(1);
    setSideBar(null);
  };
  useEffect(() => {
    setSearch("");
    setselectedCategories([]);
    setPrice(false);
    setCurrentPage(1);
  }, [category]);
  const filterProps = {
    removeFilter,
    categoriesData,
    search,
    setSearch,
    selectedCategories,
    setselectedCategories,
    notFound,
    price,
    setPrice,
    category,
  };
  useEffect(() => {
    if (!products.length) {
      dispatch(allProductsSlice.actions.fetchData());
    }
  }, [dispatch, products.length]);
  useEffect(() => {
    window.scrollTo({ top: "0", behavior: "smooth" });
  }, [currentPage]);
  useEffect(() => {
    setCurrentPage(1);
  }, [search, price, selectedCategories]);
  return (
    <>
      <HeroSection heroData={heroData} loading={loading} error={error} />

      <SideBarDrawer
        side="right"
        open={sideBar === "shopFilter"}
        onClose={() => setSideBar(null)}
      >
        <FilterSideBar {...filterProps} />
      </SideBarDrawer>
      <section className="xl:flex gap-2 px-5 lg:px-8 xl:px-16 2xl:px-36">
        <div
          onClick={() => setSideBar("shopFilter")}
          className="xl:hidden mt-2 w-32 py-2 flex gap-2 items-center justify-start hover:text-gray-500 cursor-pointer"
        >
          <FaBars />
          <span>مشاهده فیلترها</span>
        </div>
        <div className="hidden xl:block h-screen p-4 w-1/4">
          <FilterSideBar {...filterProps} />
        </div>
        <div className="xl:w-3/4">
          <ProductsGrid
            products={currentProducts}
            loading={loading}
            error={error}
          />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
    </>
  );
};

export default ShopContainer;

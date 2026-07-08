import { FaSearch } from "react-icons/fa";
import { useSideBar } from "../SideBarProvider/SideBarProvider";
const FilterSideBar = ({
  selectedCategories,
  setselectedCategories,
  search,
  setSearch,
  notFound,
  price,
  setPrice,
  removeFilter,
  category,
  categoriesData,
}) => {
  const { setSideBar } = useSideBar();
  const categoryCheck = (category) => {
    setselectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((elem) => elem !== category)
        : [...prev, category],
    );
  };
  return (
    <div className="p-4 xl:p-0">
      <div className="relative">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          type="text"
          placeholder="جستوجوی محصولات"
          className="outline-0 border border-gray-300 rounded-lg p-2 w-full"
        />
        <FaSearch className="text-gray-500 absolute top-1/2 left-1 -translate-y-1/2" />
      </div>
      {notFound && (
        <div className="p-4 text-green-800 font-bold">
          محصولی مرتبط با " {search} " یافت نشد. مجددا تلاش کنید.
        </div>
      )}

      {!category && (
        <div className="mt-4 border border-gray-300 rounded-lg">
          <h3 className="text-lg p-2 text-green-800 border-b  border-gray-300">
            دسته بندی محصولات
          </h3>
          {categoriesData.map((data) => (
            <label
              key={data.id}
              className="flex items-center p-2 gap-2 cursor-pointer hover:text-green-800"
            >
              <input
                className="accent-green-800 peer"
                type="checkbox"
                checked={selectedCategories.includes(data.category)}
                onChange={() => categoryCheck(data.category)}
              />
              <span className="peer-checked:text-green-800">{data.name}</span>
            </label>
          ))}
        </div>
      )}
      <label className="flex items-center border border-gray-300 rounded-lg p-2 my-4 gap-2 cursor-pointer hover:text-green-800">
        <input
          checked={price}
          onChange={() => setPrice((prev) => !prev)}
          className="accent-green-800 peer"
          type="checkbox"
        />
        <span className="peer-checked:text-green-800"> فیلتر بر اساس قیمت</span>
      </label>

      <div className="flex gap-4">
        <button
          onClick={() => setSideBar(null)}
          className={`xl:hidden border border-[#004941] text-[#004941] text-center rounded-xl my-4 p-2 w-full cursor-pointer hover:bg-[#0c7b6e] hover:text-white`}
        >
          اعمال تغییرات
        </button>
        <button
          onClick={removeFilter}
          className={`border border-red-600 text-red-600 text-center rounded-xl my-4 p-2 w-full cursor-pointer hover:bg-red-500 hover:text-white`}
        >
          حذف فیلترها
        </button>
      </div>
    </div>
  );
};

export default FilterSideBar;

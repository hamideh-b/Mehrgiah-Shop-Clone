import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import accessoryIcon from "../../assets/Images/Icon1.png";
import Loading from "./Loading";
import AccessoriesCategoryHeader from "./AccessoriesCategoryHeader";
import AccessoriesItem from "./AccessoriesItem";
import { accessoriesSlice } from "../../Redux/accessories/accessories";

const AccessoriesCategory = () => {
  const { data, loading, error } = useSelector((state) => state.accessories);
  const showSkeleton = loading && data?.length === 0;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!data?.length) {
      dispatch(accessoriesSlice.actions.fetchData());
    }
  }, [dispatch, data]);

  return (
    <section className="my-8">
      <AccessoriesCategoryHeader accessoryIcon={accessoryIcon} />
      {error && <div className="text-center text-red-500 mb-4">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-5 md:px-12 xl:px-16">
        {showSkeleton
          ? Array.from({ length: 4 }).map((_, index) => <Loading key={index} />)
          : null}

        {data?.map((accessory) => (
          <AccessoriesItem key={accessory.id} {...accessory} />
        ))}
      </div>
    </section>
  );
};

export default AccessoriesCategory;

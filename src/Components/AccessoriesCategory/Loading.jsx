import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <div className="overflow-hidden rounded-2xl">
      <Skeleton height={350} />
    </div>
  );
};

export default Loading;

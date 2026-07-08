import Skeleton from "react-loading-skeleton";

const HeroSection = ({ heroData, loading, error }) => {
  return (
    <>
      {error && <div className="text-center text-red-500 mb-4">{error}</div>}
      {loading ? (
        <Skeleton className="mt-4 h-40 lg:h-72" />
      ) : (
        <section
          className={`h-40 lg:h-72 flex flex-col justify-center items-center bg-no-repeat bg-[url('${heroData?.img}')]  bg-cover bg-center`}
          style={{
            backgroundImage: `url(${heroData?.img})`,
          }}
        >
          <h1 className="text-center text-white text-2xl lg:text-4xl ">
            {heroData?.name}
          </h1>
        </section>
      )}
    </>
  );
};

export default HeroSection;

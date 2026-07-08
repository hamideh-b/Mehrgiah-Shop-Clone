import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { sliderSlice } from "../../Redux/slider/sliderSlice";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
const Slider = () => {
  const { data, loading, error } = useSelector((state) => state.slider);
  const dispatch = useDispatch();
  const [desktop, setDesktop] = useState(false);
  const checkHandler = () => {
    setDesktop(window.innerWidth >= 992);
  };
  useEffect(() => {
    if (!data.length) {
      dispatch(sliderSlice.actions.fetchData());
    }

    window.addEventListener("resize", checkHandler);
    return () => {
      window.removeEventListener("resize", checkHandler);
    };
  }, [dispatch, data]);
  useEffect(() => {
    window.addEventListener("resize", checkHandler);
    return () => {
      window.removeEventListener("resize", checkHandler);
    };
  }, []);
  return (
    <>
      {error ? <h2 className="text-red-600 text-center">{error}</h2> : null}
      {loading ? (
        <div className="rounded-2xl w-full h-full overflow-hidden">
          <Skeleton
            style={{ width: "85%", display: "block", margin: "0 auto" }}
            height={550}
          />
        </div>
      ) : null}
      <Swiper
        spaceBetween={0}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={desktop}
        modules={[Autoplay, Navigation]}
        className="mySwiper  overflow-hidden"
      >
        {data?.map((slider) => (
          <SwiperSlide
            key={slider.id}
            className="mx-auto px-5 md:px-12 lg:px-16 xl:px-16 2xl:px-36 "
          >
            <Link className="block w-full h-full" to={slider.link}>
              <div className="rounded-2xl w-full h-full overflow-hidden">
                <picture>
                  <source media="(min-width:992px)" srcSet={slider.imgLG} />
                  <img src={slider.img} alt="functinal" />
                </picture>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;

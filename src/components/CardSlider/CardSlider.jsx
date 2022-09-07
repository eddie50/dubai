// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
import "./CardSlider.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import Swiper styles
import "swiper/css";

const breakpoints = {
  // when window width is >= 320px
  320: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 8,
    spaceBetween: 16,
  },
};
const CardSlider = ({title}) => {
  return (
    <div className="cardSlider">
      <div className="topOfSlider">
        <p>{title}</p>
        <button>
          <ArrowForwardIcon className="slider-top-icon" />
        </button>
      </div>

      <Swiper
        className="swiper"
        breakpoints={breakpoints}
      >
        <SwiperSlide className="card-slide">
          <Card  />
        </SwiperSlide>
        <SwiperSlide className="card-slide">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="card-slide">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="card-slide">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="card-slide">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="card-slide">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="card-slide">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="card-slide">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="card-slide">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="card-slide">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="card-slide">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="card-slide">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="card-slide">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="card-slide">
          <button>
            <ArrowForwardIcon className="slider-top-icon" />
          </button>
          <p className="view">View All</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardSlider;

"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderButtons = ({
  containerStyles,
  btnStyles,
}: {
  containerStyles: string;
  btnStyles: string;
}) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold onClick={() => swiper.slideNext()} />
      </button>
    </div>
  );
};

export default WorkSliderButtons;

import React, { useState } from "react";
import SwiperEvents from "../features/swiper-ui-component-events";
import useScreenWidth from "@/hooks/useScreenWidth";
import data from "@/data//ui/ui-events-component.json";

export const Events = () => {
  const events = data;

  const screenWidth = useScreenWidth();

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 3
        ? 0
        : prevIndex === events.length - 1
          ? prevIndex
          : prevIndex + 1,
    );
  };

  const numberOfEventsToShow = screenWidth < 769 ? 2 : 3;
  const containerClassName = screenWidth < 769 ? "no-container" : "container";

  return (
    <>
      <div className={containerClassName}>
        <div
          className="h-[449px] rounded-[48px] bg-[#337362] pt-[90px] md:rounded-[24px] md:pt-[48px] md:text-center"
          style={{
            backgroundImage: "url(/vector3.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-row justify-between gap-[138px] px-[114px] md:flex-col md:gap-[12px] md:px-[24px]">
            <h1 className="text-nowrap text-[40px] font-semibold text-[#FFFFFF] md:text-[28px]">
              Upcoming Events
            </h1>
            <p className="line-clamp-3 font-normal text-[#FFFFFF] md:line-clamp-none md:text-center md:text-base">
              Stay updated on the latest events featuring insights and
              information from top universities worldwide that can help you
              discover your overseas study goals.
            </p>
          </div>
        </div>
        <div className="mt-[-250px] flex flex-row justify-center md:mt-[-200px]">
          <SwiperEvents />
        </div>
      </div>
    </>
  );
};

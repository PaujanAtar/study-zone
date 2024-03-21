import React from "react";
import SwiperEvents from "../features/swiper-ui-component-events";
import useScreenWidth from "@/hooks/useScreenWidth";

export const Events = () => {
  const screenWidth = useScreenWidth();
  const containerClassName = screenWidth < 769 ? "no-container" : "container";

  return (
    <>
      <div className={containerClassName}>
        <div
          className="h-[449px] rounded-[48px] bg-[#337362] pt-[90px] md:rounded-[24px] md:pt-[48px] md:text-center"
          style={{
            backgroundImage: "url(../../../public/vector3.png)",
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

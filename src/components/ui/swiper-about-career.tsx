import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

export default function SwiperAboutCareer() {
  const careers = [
    {
      title: "Study Consultant",
      division: "Consultant",
      link: "study-consultant",
    },
    {
      title: "Study Consultant",
      division: "Consultant",
      link: "study-consultant",
    },
    {
      title: "Study Consultant",
      division: "Consultant",
      link: "study-consultant",
    },
    {
      title: "Study Consultant",
      division: "Consultant",
      link: "study-consultant",
    },
    {
      title: "Study Consultant",
      division: "Consultant",
      link: "study-consultant",
    },
    {
      title: "Study Consultant",
      division: "Consultant",
      link: "study-consultant",
    },
  ];

  const [screenWidth, setScreenWidth] = useState(0);

  const numberOfCareersToShow =
    screenWidth > 1400 ? 5 : screenWidth < 850 ? 2 : 3;
  const gap = screenWidth < 769 ? 12 : 24;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Update screenWidth state on mount and resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full px-[90px] md:flex md:flex-col md:items-center md:px-[24px]">
      <div className="relative flex w-full flex-row justify-center md:max-h-[284px] md:max-w-[450px]">
        <Swiper
          slidesPerView={numberOfCareersToShow}
          spaceBetween={gap}
          freeMode={true}
          pagination={{
            el: ".swiper-pagination-careers",
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          navigation={{
            prevEl: ".prev-careers",
            nextEl: ".next-careers",
          }}
          onInit={(swiper: any) => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = ".prev-careers";
              swiper.params.navigation.nextEl = ".next-careers";
            }
            swiper.pagination.init();
            swiper.pagination.render();
          }}
          className="mx-[90px] mt-[-60px] flex w-[100%] flex-row justify-center gap-[24px] !p-[4px] md:mt-[-120px] md:gap-[12px]"
        >
          {careers.map((career, i) => (
            <SwiperSlide
              key={i}
              className="shadow-left flex w-[100%] max-w-[356px] flex-col justify-between rounded-[36px] border-2 border-solid border-[#001427] bg-[#FEDB99]"
            >
              <div className="flex flex-col px-[16px] pb-[24px] pt-[16px]">
                <h2 className="text-base font-normal text-[#001427] md:text-sm">
                  {career.division}
                </h2>
                <h1 className="mt-[12px] text-2xl font-semibold text-[#191919] md:text-xl">
                  {career.title}
                </h1>
                <Link
                  href={`/career/${career.title.toLowerCase()}`}
                  className="mt-[24px] text-base font-medium text-[#7D1418] md:text-sm"
                >
                  Check Career
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className={
          "swiper-pagination-careers mb-[191px] mt-[24px] flex flex-row justify-center gap-[8px]"
        }
      />
    </div>
  );
}

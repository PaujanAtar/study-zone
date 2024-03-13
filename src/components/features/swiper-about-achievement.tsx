import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import useScreenWidth from "@/hooks/useScreenWidth";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import data from "@/data/feature/swiper-about-achievment.json";

export default function SwiperAboutAchievement() {
  const achievements = data;

  const screenWidth = useScreenWidth();

  const numberOfAchievementsToShow =
    screenWidth > 1400 ? 5 : screenWidth < 850 ? 2 : 3;
  const gap = screenWidth < 769 ? 12 : 24;

  return (
    <div className="w-full px-[100px] md:flex md:flex-col md:items-center md:px-0">
      <div className="relative flex w-full flex-row justify-center md:max-h-[284px] md:max-w-[450px]">
        <Swiper
          slidesPerView={numberOfAchievementsToShow}
          spaceBetween={gap}
          freeMode={true}
          pagination={{
            el: ".swiper-pagination-achievements",
            clickable: true,
          }}
          modules={[Navigation, FreeMode, Pagination]}
          navigation={{
            prevEl: ".prev-achievements",
            nextEl: ".next-achievements",
          }}
          onInit={(swiper: any) => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = ".prev-achievements";
              swiper.params.navigation.nextEl = ".next-achievements";
              swiper.navigation.init();
            }
            swiper.pagination.init();
            swiper.pagination.render();
          }}
          className="mt-[48px] flex flex-row justify-center gap-[24px] !p-[4px]"
        >
          {achievements.map((achievement, i) => (
            <SwiperSlide
              key={i}
              className="shadow-left relative flex max-w-[356px] flex-col justify-between rounded-[36px] border-2 border-solid border-[#001427] bg-[#FFFBEF] md:h-[224px] md:max-w-[160px] md:rounded-[12px]"
            >
              <div className="flex flex-col p-[24px]">
                <Image
                  src={achievement}
                  alt="achievement"
                  width={270}
                  height={394}
                  className="w-full rounded-[12px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="prev-achievements absolute left-[-60px] top-[50%] z-40 mr-[-20px] md:hidden">
          <Image src={"/backtesti.png"} alt="backward" width={48} height={48} />
        </button>
        <button className="next-achievements absolute right-[-60px] top-[50%] z-40 ml-[-20px] md:hidden">
          <Image src={"/nexttesti.png"} alt="backward" width={48} height={48} />
        </button>
      </div>
      <div
        className={
          "swiper-pagination-achievements mt-[24px] flex flex-row justify-center gap-[8px]"
        }
      />
    </div>
  );
}

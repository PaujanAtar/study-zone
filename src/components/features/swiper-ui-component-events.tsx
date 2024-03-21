import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import useScreenWidth from "@/hooks/useScreenWidth";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";

export default function SwiperEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("EventEvents");
    const parsedData = storedData ? JSON.parse(storedData) : {};
    setEvents(parsedData);
  }, []);

  const screenWidth = useScreenWidth();

  const numberOfEventsToShow =
    screenWidth > 1400 ? 5 : screenWidth < 850 ? 2 : 3;
  const gap = screenWidth < 769 ? 12 : 24;

  return (
    <div className="w-full px-[90px] md:flex md:flex-col md:items-center md:px-[24px]">
      <div className="relative flex w-full flex-row justify-center md:max-h-[284px] md:max-w-[450px]">
        <Swiper
          slidesPerView={numberOfEventsToShow}
          spaceBetween={gap}
          freeMode={true}
          pagination={{
            el: ".swiper-pagination-events",
            clickable: true,
          }}
          modules={[Navigation, FreeMode, Pagination]}
          navigation={{
            prevEl: ".prev-events",
            nextEl: ".next-events",
          }}
          onInit={(swiper: any) => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = ".prev-events";
              swiper.params.navigation.nextEl = ".next-events";
              swiper.navigation.init();
            }
            swiper.pagination.init();
            swiper.pagination.render();
          }}
          className="mt-[48px] flex flex-row justify-center gap-[24px] !p-[4px] md:mt-0 md:grid md:grid-cols-2 md:gap-[12px] md:text-pretty md:px-[24px]"
        >
          {Array.isArray(events) &&
            events.slice(0, 6)?.map((event: any, i) => (
              <SwiperSlide
                key={i}
                className="shadow-left relative flex h-auto max-w-[356px] flex-col items-center justify-between rounded-[36px] border-2 border-solid border-[#001427] bg-[#FFFBEF] md:h-[400px] md:max-w-[234px]"
              >
                <div className="flex flex-col px-[16px] pb-[48px] pt-[16px]">
                  <Image
                    src={event.image}
                    alt="event"
                    width={240}
                    height={286}
                    className="w-full rounded-[12px] object-cover md:h-[144px] md:w-full"
                  />
                  <h1 className="mt-[24px] text-2xl font-semibold text-[#191919] md:mt-[12px] md:text-base">
                    {event.title}
                  </h1>
                  <Link
                    href={`/events${event.link}`}
                    className="mt-[24px] text-base font-medium text-[#7D1418] md:mt-[12px] md:text-xs"
                  >
                    Register Event
                  </Link>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <button className="prev-events absolute left-[-20px] top-[50%] z-40 mr-[-20px] md:hidden">
          <Image
            src={"/backevents.png"}
            alt="backward"
            width={48}
            height={48}
          />
        </button>
        <button className="next-events absolute right-[-20px] top-[50%] z-40 ml-[-20px] md:hidden">
          <Image
            src={"/nextevents.png"}
            alt="backward"
            width={48}
            height={48}
          />
        </button>
      </div>
      <div
        className={
          "swiper-pagination-events mb-[178px] mt-[24px] flex cursor-pointer justify-center gap-[8px] text-[#E67026] md:mb-[80px]"
        }
      />
    </div>
  );
}

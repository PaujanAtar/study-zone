import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import useScreenWidth from "@/hooks/useScreenWidth";
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";

export default function SwiperTestimony() {
  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("TestimonySwiper");
    const parsedData = storedData ? JSON.parse(storedData) : {};
    setTestimonies(parsedData);
  }, []);

  const screenWidth = useScreenWidth();

  const numberOfTestimoniesToShow =
    screenWidth > 1400 ? 5 : screenWidth < 850 ? 2 : 3;
  const gap = screenWidth < 769 ? 12 : 24;

  return (
    <div className="w-full px-[90px] md:flex md:flex-col md:items-center md:px-[24px]">
      <div className="relative flex w-full flex-row gap-[12px] md:mt-[24px] md:items-center">
        <Swiper
          slidesPerView={numberOfTestimoniesToShow}
          spaceBetween={gap}
          freeMode={true}
          pagination={{
            el: ".swiper-pagination-testimony",
            clickable: true,
          }}
          modules={[Navigation, FreeMode, Pagination]}
          navigation={{
            prevEl: ".prev-testimony",
            nextEl: ".next-testimony",
          }}
          onInit={(swiper: any) => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = ".prev-testimony";
              swiper.params.navigation.nextEl = ".next-testimony";
              swiper.navigation.init();
            }
            swiper.pagination.init();
            swiper.pagination.render();
          }}
          className="ml-[10px] flex flex-row gap-[24px] md:mx-5 md:w-full md:justify-center"
        >
          {testimonies?.map((testimony: any, i) => (
            <SwiperSlide
              key={i}
              className="btn-white shadow-left flex h-[395px] max-w-[270px] flex-col rounded-[12px]"
            >
              <Image
                src={testimony.image}
                alt={`${i}`}
                key={i}
                width={270}
                height={218}
                className="h-[218px] max-h-[218px] rounded-t-[12px] object-cover"
              />
              <div className="py-[24px]">
                <p className="mx-[12px] line-clamp-3 text-sm font-normal">
                  {testimony.message}
                </p>
                <div>
                  <h1 className="mx-[12px] pt-[24px] text-xl font-semibold">
                    {testimony.name}
                  </h1>
                  <h2 className="mx-[12px] text-sm font-light">
                    {testimony.town}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="prev-testimony absolute left-[-70px] top-[50%] z-40 mr-[-20px] md:hidden">
          <Image
            src={"/backevents.png"}
            alt="backward"
            width={48}
            height={48}
          />
        </button>
        <button className="next-testimony absolute right-[-70px] top-[50%] z-40 ml-[-20px] md:hidden">
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
          "swiper-pagination-testimony mt-[24px] hidden cursor-pointer justify-center gap-[8px] text-[#E67026] md:mb-[80px] md:flex"
        }
      />
    </div>
  );
}

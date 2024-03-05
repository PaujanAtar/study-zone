import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

export default function SwiperAboutGallery() {
  const galleries = [
    "/gallery1.jpeg",
    "/gallery2.jpeg",
    "/gallery3.jpeg",
    "/gallery4.jpeg",
    "/gallery1.jpeg",
    "/gallery2.jpeg",
    "/gallery3.jpeg",
    "/gallery4.jpeg",
  ];

  const [screenWidth, setScreenWidth] = useState(0);

  const numberOfGalleriesToShow =
    screenWidth > 1400 ? 5 : screenWidth < 850 ? 2 : 4;
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
          slidesPerView={numberOfGalleriesToShow}
          spaceBetween={gap}
          freeMode={true}
          pagination={{
            el: ".swiper-pagination-galleries",
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          navigation={{
            prevEl: ".prev-galleries",
            nextEl: ".next-galleries",
          }}
          onInit={(swiper: any) => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = ".prev-galleries";
              swiper.params.navigation.nextEl = ".next-galleries";
            }
            swiper.pagination.init();
            swiper.pagination.render();
          }}
          className="mt-[48px] flex flex-row justify-center gap-[24px] !p-[4px] md:gap-[12px]"
        >
          {galleries.map((gallery, i) => (
            <SwiperSlide key={i}>
              <Image
                src={gallery}
                alt="gallery"
                width={318}
                height={220}
                className="shadow-left h-[220px] rounded-[12px] border-2 border-[#000000] object-cover md:h-[112px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className={
          "swiper-pagination-galleries mb-[160px] mt-[24px] flex flex-row justify-center gap-[8px]"
        }
      />
    </div>
  );
}

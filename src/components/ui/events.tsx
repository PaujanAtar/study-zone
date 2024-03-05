import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import SwiperEvents from "./swiper-events";

export const Events = () => {
  const events = [
    {
      title: "Test 1",
      image: "/events.png",
      link: "/travel-arrangement",
    },
    { title: "Test 2", image: "/events.png", link: "/english-test" },
    { title: "Test 3", image: "/events.png", link: "/scholarship" },
    {
      title: "Test 4",
      image: "/events.png",
      link: "/travel-arrangement",
    },
    { title: "Test 5", image: "/events.png", link: "/english-test" },
    { title: "Test 6", image: "/events.png", link: "/scholarship" },
  ];

  const [screenWidth, setScreenWidth] = useState(0);

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
          {/* <button onClick={handlePrev} className="z-40 mr-[-20px] md:hidden">
            <Image
              src={"/backevents.png"}
              alt="backward"
              width={48}
              height={48}
            />
          </button>
          <div className="mt-[48px] flex flex-row justify-center gap-[24px] md:mt-0 md:grid md:grid-cols-2 md:gap-[12px] md:text-pretty md:px-[24px]">
            {events
              .slice(currentIndex, currentIndex + numberOfEventsToShow)
              .map((event, i) => (
                <div
                  key={i}
                  className="shadow-left relative flex h-[400px] max-w-[356px] flex-col justify-between rounded-[36px] border-2 border-solid border-[#001427] bg-[#FFFBEF] md:h-auto"
                >
                  <div className="flex flex-col px-[16px] pb-[48px] pt-[16px]">
                    <Image
                      src={event.image}
                      alt="event"
                      width={240}
                      height={286}
                      className="rounded-[12px] object-cover md:h-[144px] md:w-[144px]"
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
                </div>
              ))}
          </div>
          <button onClick={handleNext} className="z-40 ml-[-20px] md:hidden">
            <Image
              src={"/nextevents.png"}
              alt="backward"
              width={48}
              height={48}
            />
          </button> */}
        </div>
        {/* <div className="mb-[178px] flex flex-row justify-center gap-[8px] md:mb-[80px]">
          {events.slice(0, 4).map((carousel, index) => (
            <div
              key={index}
              className={`mt-[24px] h-[8px] w-[8px] rounded-full ${
                index === currentIndex ? "bg-[#E67026]" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div> */}
      </div>
    </>
  );
};

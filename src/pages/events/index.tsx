import MainLayout from "@/components/layout/main";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const EventPage = () => {
  const events = [
    {
      title: "Travel Arrangement",
      image: "/events.png",
      link: "/travel-arrangement",
    },
    { title: "English Test", image: "/events.png", link: "/english-test" },
    { title: "Scholarship", image: "/events.png", link: "/scholarship" },
    {
      title: "Travel Arrangement",
      image: "/events.png",
      link: "/travel-arrangement",
    },
    { title: "English Test", image: "/events.png", link: "/english-test" },
    { title: "Scholarship", image: "/events.png", link: "/scholarship" },
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

  const numberOfEventsToShow = screenWidth < 769 ? 2 : events.length;
  const containerClassName = screenWidth < 769 ? "no-container" : "container";

  return (
    <>
      <MainLayout>
        <div className={containerClassName}>
          <div
            className="mt-[152px] h-[449px] rounded-[48px] bg-[#337362] pt-[90px] md:mt-[92px] md:rounded-[24px] md:pt-[48px] md:text-center"
            style={{
              backgroundImage: "url(/vector3.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-row justify-between gap-[138px] px-[114px] md:flex-col md:gap-[12px] md:px-[24px]">
              <h1 className="text-[40px] font-semibold text-[#FFFFFF] md:text-[28px]">
                Upcoming Events
              </h1>
              <p className="line-clamp-3 font-normal text-[#FFFFFF] md:line-clamp-none md:text-center md:text-base">
                Stay updated on the latest events featuring insights and
                information from top universities worldwide that can help you
                discover your overseas study goals.
              </p>
            </div>
          </div>
          <div className="relative mt-[-250px] flex flex-row justify-center md:mt-[-200px]">
            <div className="mb-[120px] mt-[48px] grid grid-cols-3 justify-center gap-[24px] md:grid-cols-2 md:gap-[12px] md:text-pretty md:px-[24px]">
              {events.map((event, i) => (
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
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default EventPage;

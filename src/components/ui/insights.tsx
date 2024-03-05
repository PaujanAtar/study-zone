import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export const Insights = () => {
  const news = [
    {
      headline: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
      date: "June 12 2023",
      image: "/Australia.png",
      link: "insight1",
    },
    {
      headline: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
      date: "June 12 2023",
      image: "/UnitedKingdom.png",
      link: "insight1",
    },
    {
      headline: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
      date: "June 12 2023",
      image: "/America.png",
      link: "insight1",
    },
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

  const numberOfInsightsToShow = screenWidth < 769 ? 2 : news.length;

  return (
    <>
      <div className="mx-[114px] flex w-[100%] flex-row justify-center gap-[36px] md:mx-[24px] md:gap-[12px]">
        {news.slice(0, numberOfInsightsToShow).map((content, i) => (
          <div key={i} className="max-w-[348px]">
            <div className="flex flex-col">
              <div className="max-w-[348px]">
                <Image
                  src={content.image}
                  alt="content"
                  width={348}
                  height={320}
                  className="shadow-left h-[320px] rounded-[12px] border-2 border-[#000000] object-cover md:h-[160px]"
                />
              </div>
              <h5 className="mt-[24px] text-xs font-semibold text-[#DA6E48]">
                {content.date}
              </h5>
              <h1 className="mt-[8px] text-xl font-semibold text-[#191919]">
                {content.headline}
              </h1>
              <h2 className="mt-[12px] line-clamp-3 text-xs font-normal text-[#404040]">
                {content.description}
              </h2>
              <Link
                href={`insights/${content.link}`}
                className="mt-[24px] text-base font-semibold text-[#7D1418]"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

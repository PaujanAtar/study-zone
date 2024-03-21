import Image from "next/image";
import Link from "next/link";
import useScreenWidth from "@/hooks/useScreenWidth";
import { useState, useEffect } from "react";

export const Insights = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("InsightNews");
    const parsedData = storedData ? JSON.parse(storedData) : {};
    setNews(parsedData);
  }, []);

  const screenWidth = useScreenWidth();

  const numberOfInsightsToShow = screenWidth < 769 ? 2 : 3;

  return (
    <>
      <div className="mx-[114px] flex w-[100%] flex-row justify-center gap-[36px] md:mx-[24px] md:gap-[12px]">
        {news.slice(0, numberOfInsightsToShow)?.map((content: any, i) => (
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

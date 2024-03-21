import MainLayout from "@/components/layout/main";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Insights = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("InsightNews");
    const parsedData = storedData ? JSON.parse(storedData) : {};
    setNews(parsedData);
  }, []);

  return (
    <>
      <MainLayout>
        <div className="container flex flex-col items-center justify-center">
          <h1 className="mb-[48px] mt-[152px] text-[40px] font-semibold text-[#001427] md:mt-[92px]">
            Stay Updated
          </h1>
          <div className="grid grid-cols-3 justify-center gap-[36px] md:grid-cols-2">
            {Array.isArray(news) &&
              news?.map((content: any, i) => (
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
                      href={`/insights/${content.link}`}
                      className="mt-[24px] text-base font-semibold text-[#7D1418]"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex flex-row justify-center gap-[8px]">
            {Array.isArray(news) &&
              news?.map((carousel, i) => (
                <div
                  key={i}
                  className="mb-[120px] mt-[24px] h-[8px] w-[8px] rounded-full bg-[#E67026]"
                ></div>
              ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Insights;

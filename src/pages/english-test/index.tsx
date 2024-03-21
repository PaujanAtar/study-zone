import React from "react";
import Link from "next/link";
import MainLayout from "@/components/layout/main";
import { AskBanner } from "@/components/ui/ask-banner";
import useScreenWidth from "@/hooks/useScreenWidth";
import { useState, useEffect } from "react";

const EnglishTest = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("EnglishTests");
    const parsedData = storedData ? JSON.parse(storedData) : {};
    setTests(parsedData);
  }, []);

  const screenWidth = useScreenWidth();

  const containerClassName = screenWidth < 769 ? "no-container" : "container";

  return (
    <>
      <MainLayout>
        <div className="mb-[120px] mt-[253px] md:mt-[92px]">
          <div className={containerClassName}>
            <div
              className="h-[286px] rounded-[48px] bg-[#337362] pt-[90px] md:h-[400px] md:rounded-[24px] md:pt-[48px]"
              style={{
                backgroundImage: "url(/Vector3.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-row justify-between gap-[138px] px-[114px] md:flex-col md:gap-[12px] md:px-[24px] md:text-center">
                <h1 className="text-nowrap text-[40px] font-semibold text-[#FFFFFF]">
                  English Test
                </h1>
                <p className="line-clamp-5 font-normal text-[#FFFFFF] md:line-clamp-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud
                </p>
              </div>
            </div>
            <div className="relative mb-[120px] flex flex-row justify-center">
              <div className="mx-[90px] mt-[-60px] grid w-[100%] grid-cols-3 justify-center gap-[24px] md:mx-[24px] md:mt-[-180px] md:grid-cols-2 md:gap-[12px]">
                {Array.isArray(tests) &&
                  tests?.map((test: any, i) => (
                    <div
                      key={i}
                      className={`shadow-left flex w-[100%] max-w-[400px] flex-col justify-between rounded-[36px] border-2 border-solid border-[#001427] bg-[#FFFBEF] ${
                        i === 2
                          ? "md:col-span-2 md:mx-auto md:max-w-[250px]"
                          : ""
                      }`}
                    >
                      <div className="flex flex-col px-[16px] pb-[24px] pt-[16px]">
                        <h1 className="mt-[12px] text-2xl font-semibold text-[#191919]">
                          {test.title}
                        </h1>
                        <Link
                          href={`/english-test/${test.title.toLowerCase()}`}
                          className="mt-[24px] text-base font-medium text-[#7D1418]"
                        >
                          See Details
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <AskBanner />
        </div>
      </MainLayout>
    </>
  );
};

export default EnglishTest;

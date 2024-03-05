import React from "react";
import Image from "next/image";
import { AskBanner } from "@/components/ui/ask-banner";
import MainLayout from "@/components/layout/main";

const TestDetails = () => {
  return (
    <>
      <MainLayout>
        <div>
          <div className="container flex flex-col items-center gap-[48px]">
            <div className="mx-[114px] mt-[152px] flex flex-row justify-center gap-[72px] md:mx-0 md:mt-[92px]">
              <Image
                src={"/America.png"}
                alt="Countries"
                width={888}
                height={420}
                className="shadow-left h-full max-h-[420px] w-[888px] rounded-[36px] border-2 border-[#001427] object-cover md:h-[158px]"
              />
            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------- */}

          <div className="container flex flex-col items-center gap-[24px] pb-[120px] pt-[48px]">
            {/* ---------------------------------------------------------------- */}
            <h1 className="text-[40px] font-semibold text-[#191919] md:text-2xl">
              Lorem ipsum dolor sit amet
            </h1>
            {/* ---------------------------------------------------------------- */}
            <div className="w-full max-w-[888px]">
              <h3 className="text-xl font-bold text-[#404040] md:text-base">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="mt-[18px] text-xl text-[#404040] md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            {/* ---------------------------------------------------------------- */}
            <div className="w-full max-w-[888px]">
              <h3 className="text-xl font-bold text-[#404040] md:text-base">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="mt-[18px] text-xl text-[#404040] md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            {/* ---------------------------------------------------------------- */}
            <div className="w-full max-w-[888px]">
              <h3 className="text-xl font-bold text-[#404040] md:text-base">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="mt-[18px] text-xl text-[#404040] md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            {/* ---------------------------------------------------------------- */}
          </div>

          {/* ------------------------------------------------------------------------------------------- */}

          <div className="container flex flex-col items-center justify-center pb-[120px]">
            <AskBanner />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default TestDetails;

import React from "react";
import Image from "next/image";
import { AskBanner } from "@/components/ui/ask-banner";
import MainLayout from "@/components/layout/main";

const EventDetails = () => {
  return (
    <>
      <MainLayout>
        <div>
          <div className="container flex flex-col items-center gap-[48px]">
            <div className="mx-[114px] mt-[152px] flex flex-row justify-center gap-[72px] md:mx-[24px] md:flex-col md:gap-[24px]">
              <Image
                src={"/events.png"}
                alt="Countries"
                width={546}
                height={546}
                className="shadow-left h-full max-h-[546px] w-full max-w-[546px] rounded-[36px] border-2 border-[#001427]"
              />
              <div className="flex flex-col justify-center gap-[24px]">
                <div className="flex flex-row">
                  <h1 className="text-5xl font-semibold text-[#001427]">
                    Lorem Ipsum
                  </h1>
                </div>
                <p className="text-xl font-medium text-[#363636]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------- */}

          <div className="container flex max-w-[888px] flex-col items-center gap-[48px] pb-[120px] pt-[120px] md:pb-[80px] md:pt-[80px]">
            <h1 className="text-[40px] font-semibold text-[#191919] md:text-center">
              National University of Singapore
            </h1>
            {/* ---------------------------------------------------------------- */}
            <div className="w-full max-w-[888px]">
              <h3 className="text-xl font-bold text-[#404040]">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="mt-[18px] text-xl text-[#404040]">
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
              <h3 className="text-xl font-bold text-[#404040]">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="mt-[18px] text-xl text-[#404040]">
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
              <h3 className="text-xl font-bold text-[#404040]">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="mt-[18px] text-xl text-[#404040]">
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

          <div className="container flex flex-row justify-center">
            <div className="shadow-left mb-[160px] flex h-[184px] w-[70vw] flex-row items-center gap-[160px] rounded-[12px] border-2 border-[#000000] bg-[#FEDB99] px-[48px] text-center md:mb-[80px] md:h-full md:flex-col md:gap-[24px] md:px-[24px] md:py-[24px]">
              <div className="mr-[24px] flex flex-col md:mr-0">
                <h1 className="text-2xl font-semibold">Registration</h1>
                <h2 className="mt-[4px] text-base font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h2>
              </div>
              <button className="btn-white shadow-left rounded-[12px] px-[36px] py-[16px] text-xl font-semibold">
                Registration
              </button>
            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------- */}

          <div className="mb-[120px]">
            <AskBanner />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default EventDetails;

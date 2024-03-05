import { AskBanner } from "@/components/ui/ask-banner";
import React from "react";
import Image from "next/image";
import MainLayout from "@/components/layout/main";

const University = () => {
  return (
    <>
      <MainLayout>
        <div>
          <div className="container flex flex-col items-center gap-[48px]">
            <div className="mx-[114px] mt-[152px] flex flex-row justify-center gap-[72px] md:mx-[24px] md:mt-[92px] md:flex-col">
              <Image
                src={"/Australia.png"}
                alt="Countries"
                width={432}
                height={546}
                className="shadow-left h-full max-h-[546px] w-full max-w-[432px] rounded-[36px] border-2 border-[#001427]"
              />
              <div className="flex flex-col justify-center gap-[24px]">
                <div className="flex flex-row md:flex-col">
                  <div className="flex items-center justify-center px-[55px] py-[24px]">
                    <Image
                      src={"/LogoIpsum.png"}
                      alt={"LogoIpsum"}
                      width={94}
                      height={48}
                    />
                  </div>
                  <h1 className="text-5xl font-semibold text-[#001427] md:text-center">
                    National University of Singapore
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

          <div className="mb-[120px] mt-[120px]">
            <AskBanner />
          </div>

          {/* ------------------------------------------------------------------------------------------- */}

          <div className="container flex max-w-[888px] flex-col items-center gap-[48px] pb-[120px]">
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
        </div>
      </MainLayout>
    </>
  );
};

export default University;

import React from "react";
import Image from "next/image";
import MainLayout from "@/components/layout/main";
import Link from "next/link";
import { Insights } from "@/components/ui/insights";

const InsightDetails = () => {
  return (
    <>
      <MainLayout>
        <div>
          <div className="container flex flex-col items-center gap-[48px]">
            <div className="mx-[114px] mt-[152px] flex flex-row justify-center gap-[72px] md:mx-0 md:h-[158px]">
              <Image
                src={"/America.png"}
                alt="Countries"
                width={888}
                height={420}
                className="shadow-left h-full max-h-[420px] w-[888px] rounded-[36px] border-2 border-[#001427] object-cover"
              />
            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------- */}

          <div className="container flex flex-col items-center gap-[24px] pb-[120px] pt-[48px]">
            <div className="flex w-full max-w-[888px] flex-col gap-[12px]">
              <div className="flex flex-row gap-[12px]">
                <Image
                  src={"/author.png"}
                  alt="Author"
                  width={24}
                  height={24}
                />
                <span>John Doe</span>
              </div>
              <div className="flex flex-row flex-wrap items-center gap-[12px]">
                <h1 className="rounded-[48px] bg-[#7D1418] px-[12px] py-[8px] text-xs font-semibold text-[#FFFFFF]">
                  17 Mei 2023
                </h1>
                <h1 className="rounded-[48px] bg-[#7D1418] px-[12px] py-[8px] text-xs font-semibold text-[#FFFFFF]">
                  Uncategorized
                </h1>
                <div className="flex flex-row gap-[12px]">
                  {" "}
                  <a href="facebook.com">
                    <Image
                      src={"/facebookinsight.png"}
                      alt="Facebook"
                      width={16}
                      height={16}
                    />
                  </a>
                  <a href="twitter.com">
                    <Image
                      src={"/twitterinsight.png"}
                      alt="Twitter"
                      width={16}
                      height={16}
                    />
                  </a>
                  <a href="linkedin.com">
                    <Image
                      src={"/linkedininsight.png"}
                      alt="Linkedin"
                      width={16}
                      height={16}
                    />
                  </a>
                </div>
                <button className="rounded-[48px] border border-[#7D1418] bg-[#FFFFFF] px-[12px] py-[8px] text-xs font-semibold text-[#7D1418]">
                  Copy Link
                </button>
              </div>
            </div>
            {/* ---------------------------------------------------------------- */}
            <div className="w-full max-w-[888px]">
              <h1 className="text-[40px] font-semibold text-[#191919]">
                Lorem ipsum dolor sit amet
              </h1>
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

          <div className="container flex flex-col items-center justify-center pb-[120px] text-center">
            <h1 className="text-[40px] font-semibold text-[#001427]">
              Stay Updated
            </h1>
            <Insights />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default InsightDetails;

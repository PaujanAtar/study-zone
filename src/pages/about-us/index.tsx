import React from "react";
import Image from "next/image";
import MainLayout from "@/components/layout/main";
import { AskBanner } from "@/components/ui/ask-banner";
import useScreenWidth from "@/hooks/useScreenWidth";
import SwiperAboutCareer from "@/components/features/swiper-about-career";
import SwiperAboutAchievement from "@/components/features/swiper-about-achievement";
import SwiperAboutGallery from "@/components/features/swiper-about-gallery";
import data from "@/data/pages/about-profiles.json";

const AboutUs = () => {
  const profiles = data;

  const screenWidth = useScreenWidth();

  const numberOfProfilesToShow = screenWidth < 769 ? 3 : profiles.length;
  const containerClassName = screenWidth < 769 ? "no-container" : "container";

  return (
    <MainLayout>
      <div className="mt-[209px] md:mt-[92px]">
        {/* ---------------------------------------------------------------------------------- */}

        <div className="mx-[138px] mb-[160px] flex flex-row items-center justify-between gap-[72px] md:mx-[24px] md:flex-col md:gap-[36px]">
          <div className="w-[100%] max-w-[546px]">
            <Image src={"/lamp.png"} alt="lamp" width={546} height={546} />
          </div>
          <div>
            <h1 className="text-5xl font-semibold md:text-[28px]">
              Bridging Dreams With Experienced Counseling
            </h1>
            <h2 className="mt-[16px] text-[22px] font-medium md:mt-[12px] md:text-base">
              To develop and promote the internationalism of the leading
              institutions in the High School, Foundation, Vocational course and
              the Higher Education sector of the overseas education systems to
              Indonesia.
            </h2>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------- */}
        <div>
          <div
            className="md:rounded- h-[1184px] rounded-[48px] bg-[#DA6E48] md:h-[619px] md:rounded-[24px]"
            style={{
              backgroundImage: "url(/vector6.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="mx-auto flex w-[100%] flex-row justify-center gap-[48px] px-[162px] pt-[162px] md:px-[24px] md:pt-[60px]">
              <div className="flex min-w-[453px] flex-col md:min-w-[332px] md:items-center md:text-center">
                <h1 className="text-[54px] font-semibold text-[#FFFFFF] md:text-[28px]">
                  Meet our team of expert and world class consultation
                </h1>
                <h2 className="mt-[24px] text-[#FFFFFF] md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </h2>
              </div>
              <div className="h-[224px] max-w-[224px] md:hidden">
                <Image
                  src={"/circle.png"}
                  alt="circle"
                  width={224}
                  height={224}
                />
              </div>
            </div>
          </div>
          <div className="mx-auto mb-[160px] mt-[-650px] grid w-[100%] max-w-[1116px] grid-cols-3 justify-center gap-[24px] px-[162px] md:mb-[80px] md:mt-[-280px] md:grid-cols-2 md:px-[24px]">
            {profiles.slice(0, numberOfProfilesToShow).map((profile, i) => (
              <div
                key={i}
                className={`btn-white shadow-left flex max-w-[356px] flex-col rounded-[12px] border-2 border-[#000000] md:max-h-[220px] md:max-w-[160px] ${
                  i === 0 ? "ml-auto" : ""
                } ${
                  i === 2 ? "md:col-span-2 md:mx-auto md:max-w-[160px]" : ""
                }`}
              >
                <Image
                  src={profile.image}
                  alt="person"
                  width={356}
                  height={356}
                  className="rounded-t-[12px] object-cover"
                />
                <h1 className="ml-[24px] mt-[24px] text-[32px] font-semibold md:mx-[8px] md:mt-[8px] md:text-base">
                  {profile.name}
                </h1>
                <h2 className="mb-[36px] ml-[24px] mt-[12px] text-2xl font-light md:mx-[8px] md:mb-[16px] md:mt-[8px] md:text-xs">
                  {profile.position}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------- */}

        <div className={containerClassName}>
          <div
            className="h-[449px] rounded-[48px] bg-[#337362] pt-[90px] md:h-[441px] md:rounded-[24px] md:pt-[48px]"
            style={{
              backgroundImage: "url(/vector3.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col justify-center gap-[24px] px-[114px] md:px-[24px]">
              <h1 className="text-center text-[40px] font-semibold text-[#FFFFFF] md:text-2xl">
                We’re committed to bringing world class, passionate
                professionals together to push new boundaries
              </h1>
              <p className="text-center font-normal text-[#FFFFFF] md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="relative flex flex-row justify-center">
            <SwiperAboutCareer />
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------- */}

        <div>
          <div
            className="h-[1276px] rounded-[48px] bg-[#FEDB99] md:h-[934px]"
            style={{
              backgroundImage: "url(/vector12.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div>
                <h1 className="mt-[162px] text-center text-[40px] font-semibold md:mt-[48px]">
                  Our Achievement
                </h1>
                <h3 className="mt-[12px] max-w-[660px] text-center text-xl font-normal text-[#7D1418]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
              </div>
              <div className="container relative flex flex-row justify-center">
                <SwiperAboutAchievement />
              </div>
            </div>
          </div>
          <div className="mt-[-290px] flex flex-col items-center justify-center">
            <div>
              <h1 className="text-center text-[40px] font-semibold">
                Our Gallery
              </h1>
              <h3 className="mx-[24px] mt-[12px] max-w-[660px] text-center text-xl font-normal text-[#7D1418]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>
            </div>
            <div className="container">
              <SwiperAboutGallery />
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------- */}

        <div className="mb-[160px]">
          <AskBanner />
        </div>

        {/* ---------------------------------------------------------------------------------- */}
      </div>
    </MainLayout>
  );
};

export default AboutUs;

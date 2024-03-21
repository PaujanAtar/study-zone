import { Insights } from "./insights";
import SwiperTestimony from "../features/swiper-ui-component-testimony";
import useScreenWidth from "@/hooks/useScreenWidth";

export const Testimony = () => {
  const screenWidth = useScreenWidth();

  const containerClassName = screenWidth < 769 ? "no-container" : "container";

  return (
    <>
      <div className={containerClassName}>
        <div
          className="h-[735px] rounded-[48px] bg-[#001427] pt-[52px] md:h-[850px] md:pt-[60px]"
          style={{
            backgroundImage: "url(../../../public/vector4.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className={`${containerClassName} flex flex-row justify-between md:flex-col md:items-center`}
          >
            <div className="flex flex-col justify-center md:text-center">
              <h1 className="text-[40px] font-semibold text-[#FAFAFA] md:text-[28px]">
                Student Testimonials
              </h1>
              <h3 className="text-base font-normal text-[#FAFAFA] md:text-base">
                Hear from those who have achieved with Studyzone.
              </h3>
            </div>
            <div className="flex max-w-[80%] flex-row gap-[12px] md:mt-[24px] md:max-w-full md:items-center">
              <SwiperTestimony />
            </div>
          </div>
          <div className="mt-[72px] flex flex-col items-center md:mt-0">
            <h1 className="mb-[48px] text-[40px] font-semibold text-[#FFFFFF] md:mb-[24px] md:text-[28px]">
              Stay Updated
            </h1>
          </div>
        </div>
        <div className="mb-[160px] mt-[-100px] flex flex-row justify-center md:mt-[-120px]">
          <Insights />
        </div>
      </div>
    </>
  );
};

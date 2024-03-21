import React from "react";
import Image from "next/image";
import Link from "next/link";

export const AskBanner = () => {
  return (
    <>
      <div className="container">
        <div
          className="flex h-[449px] flex-row items-center justify-between gap-[20px] rounded-[48px] border-2 border-[#000000] bg-[#fffbef] px-[72px] md:h-[620px] md:flex-col md:p-[24px] md:pb-[30px]"
          style={{
            backgroundImage: "url(../../../public/vector5.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="md:flex-col md:text-center">
            <Image
              src={"/askbanner.png"}
              alt="ask"
              width={507}
              height={384}
              className="hidden w-full md:block"
            />
            <h1 className="text-5xl font-semibold text-[#001427] md:mt-[24px] md:text-center md:text-[28px]">
              Ask Anything & Everything to Us!
            </h1>
            <h3 className="mt-[12px] text-xl font-normal text-[#7D1418] md:text-base">
              No initial fees or contract - just ask first to us
            </h3>
            <Link href={"/contact-us"}>
              <button className="btn-white shadow-left-extend mt-[24px] rounded-[12px] px-[36px] py-[20px] text-xl font-semibold text-[#001427] md:px-[24px] md:py-[16px] md:text-base">
                Contact Us
              </button>
            </Link>
          </div>
          <div className="max-w-[507px] md:hidden">
            <div>
              <Image
                src={"/askbanner.png"}
                alt="ask"
                width={507}
                height={384}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

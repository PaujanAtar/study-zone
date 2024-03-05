import React from "react";
import Image from "next/image";

export const Ask = () => {
  return (
    <>
      <div className="container flex flex-row items-center justify-center gap-[72px] md:flex-col">
        <div>
          <Image src={"/ask.png"} alt="man" width={456} height={649}></Image>
        </div>
        <div className="mb-[190px] flex flex-col gap-[48px] md:mb-[80px]">
          <div>
            <h1 className="text-[40px] font-semibold md:text-center md:text-[28px]">
              Ask Anything and Everything to Us!
            </h1>
            <h2 className="text-xl font-normal md:text-center md:text-base">
              We offer free consultation, so ask away and our highly-skilled
              staff will immediately contact you.
            </h2>
          </div>
          <form action="">
            <div className="grid grid-cols-2 gap-[24px] md:flex md:flex-col">
              <div>
                <h3 className="text-base font-semibold">Full Name*</h3>
                <input
                  type="text"
                  className="shadow-bottom btn-white h-[38px] w-[100%] rounded-[8px]"
                />
              </div>
              <div>
                <h3 className="text-base font-semibold">Email*</h3>
                <input
                  type="text"
                  className="shadow-bottom btn-white h-[38px] w-[100%] rounded-[8px]"
                />
              </div>
              <div>
                <h3 className="text-base font-semibold">Mobile Phone*</h3>
                <input
                  type="text"
                  className="shadow-bottom btn-white h-[38px] w-[100%] rounded-[8px]"
                />
              </div>
              <div>
                <h3 className="text-base font-semibold">
                  University Destination*
                </h3>
                <input
                  type="text"
                  className="shadow-bottom btn-white h-[38px] w-[100%] rounded-[8px]"
                />
              </div>
              <div className="col-span-2">
                <h3 className="text-base font-semibold">Message*</h3>
                <input
                  type="text"
                  className="shadow-bottom btn-white h-[104px] w-[100%] rounded-[8px]"
                />
              </div>
            </div>
          </form>
          <div className="flex justify-center">
            <button className="btn-cream shadow-bottom h-[60px] w-[137px] rounded-[12px] text-xl font-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

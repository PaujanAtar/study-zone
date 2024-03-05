import { Ask } from "@/components/ui/ask";
import React from "react";
import Image from "next/image";
import MainLayout from "@/components/layout/main";

const ContactUs = () => {
  return (
    <>
      <MainLayout>
        <div>
          <div className="container">
            <div className="mx-[228px] mt-[200px] max-w-[888px] md:mx-0 md:mt-[92px]">
              <h1 className="mb-[24px] text-[52px] font-semibold text-[#191919] md:text-4xl">
                Contact Us
              </h1>
              <h3 className="mb-[48px] text-xl font-normal text-[#404040] md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>
            </div>

            {/* ------------------------------------------------------------------------------------ */}

            <div className="flex flex-row justify-center gap-[24px] md:flex-col">
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[546px]">
                  <Image
                    src="/address1.png"
                    alt="content"
                    width={546}
                    height={320}
                    className="shadow-left h-[320px] rounded-[12px] border-2 border-[#000000] object-cover"
                  />
                </div>

                <h1 className="mt-[24px] text-2xl font-bold text-[#191919]">
                  Central Jakarta Office
                </h1>
                <h2 className="mt-[4px] line-clamp-3 text-xl font-normal text-[#404040] md:text-base">
                  Jl. Cideng Timur No. 79 <br />
                  Jakarta Pusat - Indonesia
                </h2>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[546px]">
                  <Image
                    src="/address2.png"
                    alt="content"
                    width={546}
                    height={320}
                    className="shadow-left h-[320px] rounded-[12px] border-2 border-[#000000] object-cover"
                  />
                </div>
                <h1 className="mt-[24px] text-2xl font-bold text-[#191919]">
                  North Jakarta Office
                </h1>
                <h2 className="mt-[4px] line-clamp-3 text-xl font-normal text-[#404040] md:text-base">
                  Ruko Elang Laut Blok B No.39 <br />
                  Jakarta Utara - Indonesia
                </h2>
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------ */}

            <div className="mb-[120px] mt-[72px] flex flex-row justify-center gap-[24px] md:grid md:grid-cols-2 md:gap-[12px]">
              <div className="shadow-bottom flex h-auto w-full max-w-[261px] flex-col items-center rounded-[12px] border-2 border-[#000000] bg-[#F3D58D] p-[24px] md:p-[16px]">
                <Image
                  src={"/officenumber.png"}
                  alt="Office Number"
                  width={60}
                  height={60}
                />
                <h2 className="mt-[12px] text-base font-normal md:text-sm">
                  Office Number
                </h2>
                <h1 className="mt-[12px] text-xl font-semibold md:text-xs">
                  {"+62 (21) 386 8383"}
                </h1>
              </div>
              <div className="shadow-bottom flex h-auto w-full max-w-[261px] flex-col items-center rounded-[12px] border-2 border-[#000000] bg-[#F3D58D] p-[24px] md:p-[16px]">
                <Image
                  src={"/phonenumber.png"}
                  alt="Phone Number"
                  width={60}
                  height={60}
                />
                <h2 className="mt-[12px] text-base font-normal md:text-sm">
                  Phone Number
                </h2>
                <h1 className="mt-[12px] text-xl font-semibold md:text-xs">
                  {"+62 815-8833-855"}
                </h1>
              </div>
              <div className="shadow-bottom flex h-auto w-full max-w-[261px] flex-col items-center rounded-[12px] border-2 border-[#000000] bg-[#F3D58D] p-[24px] md:p-[16px]">
                <Image
                  src={"/phonenumber.png"}
                  alt="Phone Number"
                  width={60}
                  height={60}
                />
                <h2 className="mt-[12px] text-base font-normal md:text-sm">
                  Phone Number
                </h2>
                <h1 className="mt-[12px] text-xl font-semibold md:text-xs">
                  {"+62 813-1154-0633"}
                </h1>
              </div>
              <div className="shadow-bottom flex h-auto w-full max-w-[261px] flex-col items-center rounded-[12px] border-2 border-[#000000] bg-[#F3D58D] p-[24px] md:p-[16px]">
                <Image src={"/email.png"} alt="Email" width={60} height={60} />
                <h2 className="mt-[12px] text-base font-normal md:text-sm">
                  Email
                </h2>
                <h1 className="mt-[12px] text-xl font-semibold md:text-xs">
                  {"info@studyzone.co.id"}
                </h1>
              </div>
            </div>
          </div>
          <Ask />
        </div>
      </MainLayout>
    </>
  );
};

export default ContactUs;

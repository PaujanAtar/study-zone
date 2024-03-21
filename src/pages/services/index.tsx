import MainLayout from "@/components/layout/main";
import { AskBanner } from "@/components/ui/ask-banner";
import React from "react";
import { Events } from "@/components/ui/events";
import { Insights } from "@/components/ui/insights";
import Image from "next/image";
import Link from "next/link";
import useScreenWidth from "@/hooks/useScreenWidth";
import FAQItem from "@/components/ui/faq-function";
import { useState, useEffect } from "react";

const ServicesPage = () => {
  const [services, setServices] = useState<any[]>([]);
  const [steps, setSteps] = useState<any[]>([]);
  const [faqs, setFaqs] = useState<any[]>([]);

  useEffect(() => {
    const storedServices = localStorage.getItem("ServiceServices");
    const parsedServices = storedServices ? JSON.parse(storedServices) : {};

    const storedSteps = localStorage.getItem("ServiceSteps");
    const parsedSteps = storedSteps ? JSON.parse(storedSteps) : {};

    const storedFaqs = localStorage.getItem("ServiceFaqs");
    const parsedFaqs = storedFaqs ? JSON.parse(storedFaqs) : {};
    setServices(parsedServices);
    setSteps(parsedSteps);
    setFaqs(parsedFaqs);
  }, []);

  const screenWidth = useScreenWidth();

  const containerClassName = screenWidth < 769 ? "no-container" : "container";

  return (
    <>
      <MainLayout>
        <div>
          {/* ---------------------------------------------------------------------------------- */}
          <div className="container flex max-w-[1344] justify-center">
            <Image
              src={"/services.jpeg"}
              alt="banner"
              width={1344}
              height={360}
              className="shadow-left mb-[72px] mt-[209px] h-[360px] w-full rounded-[24px] border-2 border-[#000000] object-cover md:mt-[92px] md:max-h-[120px]"
            />
          </div>

          {/* ---------------------------------------------------------------------------------- */}

          <div className="container flex flex-col items-center justify-center">
            <div>
              <h1 className="text-center text-[40px] font-semibold md:text-[28px]">
                We&apos;re helping you to get your dream university!
              </h1>
              <h3 className="mt-[12px] text-center text-xl font-normal text-[#7D1418] md:text-base">
                Ready to start a new journey? Pick your preferred country
                destination.
              </h3>
            </div>
            <div className="mt-[48px] grid grid-cols-4 gap-[24px] md:grid-cols-2 md:gap-[12px]">
              {Array.isArray(services) &&
                services?.map((service: any, i: number) => (
                  <Link
                    key={i}
                    href={`/services/${service.link}`}
                    className="shadow-left relative flex h-auto max-w-[318px] flex-col justify-between rounded-[36px] border-2 border-solid border-[#001427] bg-[#FFFBEF] md:h-[236px] md:max-w-[160px]"
                  >
                    <div className="flex w-full flex-col items-center px-[16px] pb-[48px] pt-[16px]">
                      <Image
                        src={service.image}
                        alt="Service"
                        width={240}
                        height={286}
                        className="w-full rounded-[12px] object-cover"
                      />
                      <h1 className="mt-[24px] text-center text-2xl font-semibold text-[#191919] md:break-normal md:break-all md:text-base">
                        {service.service}
                      </h1>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------- */}

          <div>
            <div className={containerClassName}>
              <div
                className="mt-[152px] h-[449px] rounded-[48px] bg-[#337362] pt-[90px]"
                style={{
                  backgroundImage: "url(/vector3.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="gap-[138px] px-[114px] text-center md:px-[24px]">
                  <h1 className="text-[40px] font-semibold text-[#FFFFFF] md:text-[28px]">
                    7 Easy Steps to Land in your Dream University
                  </h1>
                </div>
              </div>
              <div className="relative flex flex-row justify-center">
                <div className="mb-[120px] mt-[-180px] grid grid-cols-3 justify-center gap-[24px] md:mb-0 md:grid-cols-2 md:px-[24px]">
                  {Array.isArray(steps) &&
                    steps?.map((step: any, i: number) => (
                      <div
                        key={i}
                        className={`shadow-left relative flex h-[496px] max-w-[356px] flex-col justify-between rounded-[36px] border-2 border-solid border-[#001427] bg-[#FFFBEF] md:h-auto md:max-w-[160px] md:rounded-[12px] ${i === 6 ? "middle-card" : ""} ${
                          i === 0 ? "ml-auto" : ""
                        } ${i === 6 ? "md:col-span-2 md:mx-auto" : ""}`}
                      >
                        <div className="flex flex-col px-[16px] pb-[48px] pt-[16px] md:px-[8px] md:pb-[16px] md:pt-[8px]">
                          <div className="flex max-w-[324] flex-col items-center">
                            <Image
                              src={step.image}
                              alt="step"
                              width={240}
                              height={286}
                              className="w-full rounded-[12px] object-cover md:rounded-[8px]"
                            />
                          </div>
                          <div className="mt-[24px] h-[60px] w-[60px] rounded-full border-4 border-[#427969] bg-[#337362] p-[12px] text-center md:mt-[12px] md:h-[36px] md:w-[36px] md:p-[8px]">
                            <h1 className="text-xl font-semibold text-[#FFFFFF] md:text-xs">
                              {i + 1}
                            </h1>
                          </div>
                          <h1 className="mt-[24px] text-2xl font-semibold text-[#001427] md:mt-[12px] md:text-base">
                            {step.title}
                          </h1>
                          <h2 className="mb-[24px] mt-[12px] text-xl font-normal text-[#535353] md:mt-[12px] md:text-xs">
                            {step.description}
                          </h2>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------- */}

          <div>
            <div
              className="mt-[152px] h-[1184px] rounded-[48px] bg-[#DA6E48]"
              style={{
                backgroundImage: "url(/6.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-col items-center gap-[48px]">
                <h1 className="mt-[162px] text-[54px] font-semibold text-[#FFFFFF] md:mt-[48px] md:text-center md:text-[28px]">
                  Common Questions
                </h1>
              </div>
            </div>
            <div className="container">
              <div className="mb-[120px] mt-[-850px] flex flex-col items-center gap-[48px] md:mt-[-1000px]">
                {Array.isArray(faqs) &&
                  faqs?.map((faq: any, i: number) => (
                    <FAQItem key={i} faq={faq} />
                  ))}
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------- */}

          <div className="mb-[120px]">
            <AskBanner />
          </div>

          {/* ---------------------------------------------------------------------------------- */}

          <div className="mb-[120px]">
            <Events />
          </div>

          {/* ---------------------------------------------------------------------------------- */}

          <div className="mb-[120px] flex flex-col items-center justify-center">
            <h1 className="mb-[48px] text-[40px] font-semibold text-[#001427]">
              Stay Updated
            </h1>
            <div className="container flex flex-col items-center">
              <Insights />
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------- */}
        </div>
      </MainLayout>
    </>
  );
};

export default ServicesPage;

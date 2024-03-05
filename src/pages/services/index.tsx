import MainLayout from "@/components/layout/main";
import { AskBanner } from "@/components/ui/ask-banner";
import React from "react";
import { Events } from "@/components/ui/events";
import { Insights } from "@/components/ui/insights";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQItem from "@/components/ui/faq-function";

const ServicesPage = () => {
  const services = [
    {
      service: "Education Consultation",
      image: "/EducationConsultation.png",
      link: "education-consultation",
    },
    {
      service: "Student Accommodation",
      image: "/StudentAccommodation.png",
      link: "student-accommodation",
    },
    {
      service: "Student Health Insurance",
      image: "/StudentHealthInsurance.png",
      link: "student-health-insurance",
    },
    {
      service: "Student & Tourist Visa",
      image: "/StudentandTouristVisa.png",
      link: "student-tourist-visa",
    },
    {
      service: "Travel Arrangement",
      image: "/TravelArrangement.png",
      link: "education-consultation",
    },
    {
      service: "English Test",
      image: "/EnglishTests.png",
      link: "english-test",
    },
    { service: "Scholarship", image: "/Scholarship.png", link: "scholarship" },
    {
      service: "Document Translation",
      image: "/DocumentTranslation.png",
      link: "document-translation",
    },
  ];

  const steps = [
    {
      title: "Counseling",
      image: "/counseling.jpeg",
      description: "Plan your Academic and Career Goals.",
    },
    {
      title: "Counseling",
      image: "/counseling.jpeg",
      description: "Plan your Academic and Career Goals.",
    },
    {
      title: "Counseling",
      image: "/counseling.jpeg",
      description: "Plan your Academic and Career Goals.",
    },
    {
      title: "Counseling",
      image: "/counseling.jpeg",
      description: "Plan your Academic and Career Goals.",
    },
    {
      title: "Counseling",
      image: "/counseling.jpeg",
      description: "Plan your Academic and Career Goals.",
    },
    {
      title: "Counseling",
      image: "/counseling.jpeg",
      description: "Plan your Academic and Career Goals.",
    },
    {
      title: "Counseling",
      image: "/counseling.jpeg",
      description: "Plan your Academic and Career Goals.",
    },
  ];

  const faqs = [
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Update screenWidth state on mount and resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
              {services.map((service, i) => (
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
                    <h1 className="mt-[24px] break-all text-center text-2xl font-semibold text-[#191919] md:break-normal md:text-base">
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
                  {steps.map((step, i) => (
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
                backgroundImage: "url(/vector6.png)",
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
                {faqs.map((faq, index) => (
                  <FAQItem key={index} faq={faq} />
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

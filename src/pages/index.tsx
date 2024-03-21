import Image from "next/image";
import useScreenWidth from "@/hooks/useScreenWidth";
import Link from "next/link";
import MainLayout from "@/components/layout/main";
import { Countries } from "@/components/ui/countries";
import { Services } from "@/components/ui/services";
import { Events } from "@/components/ui/events";
import { Ask } from "@/components/ui/ask";
import { Testimony } from "@/components/ui/testimony";
import { AskBanner } from "@/components/ui/ask-banner";
import dataLoader from "@/data/loader";
import { useEffect } from "react";

export default function Home() {
  const screenWidth = useScreenWidth();

  const formWidth = screenWidth < 1100 ? "max-w-[372px]" : "w-[372px]";

  useEffect(() => {
    dataLoader();
  }, []);

  return (
    <MainLayout>
      <main>
        {/* ---------------------------------------------------------------------------------- */}

        <div
          className="container grid grid-cols-2 gap-[100px] pt-[152px] md:flex md:flex-col md:pt-[92px]"
          style={{
            backgroundImage: "url(../../../public/vector2.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col">
            <div className="top-0 text-[#001427]">
              <h1 className="text-5xl font-semibold md:text-[32px]">
                See The World, Start Your Study Abroad Journey With Us
              </h1>
              <h3 className="mb-[56px] mt-[16px] text-[22px] font-medium md:text-base">
                Unlock your study abroad dreams and kick start your future now.
              </h3>
              <Link
                href={"/study-destinations"}
                className="btn-white shadow-left-extend h-[60px] rounded-[12px] px-[36px] py-[20px] text-base font-semibold text-[#000000] md:text-base"
              >
                Get Started
              </Link>
            </div>
            <div className="relative hidden md:block">
              <Image
                src="/woman.png"
                alt="Woman"
                width={330}
                height={398}
                className="pt-[48px]"
              />
            </div>
            <div>
              <div className="mb-[24px] mt-[230px] flex flex-row gap-[24px] md:mt-[32px] md:gap-[12px]">
                <div>
                  <h2 className="text-4xl font-semibold text-[#7D1418] md:text-[24px]">
                    20+
                  </h2>
                  <h3 className="text-xl font-semibold text-[#DE4303] md:text-[14px]">
                    Years of Experience
                  </h3>
                </div>
                <div>
                  <h2 className="text-4xl font-semibold text-[#7D1418] md:text-[24px]">
                    3.500+
                  </h2>
                  <h3 className="text-xl font-semibold text-[#DE4303] md:text-[14px]">
                    Successful Students
                  </h3>
                </div>
                <div>
                  <h2 className="text-4xl font-semibold text-[#7D1418] md:text-[24px]">
                    300+
                  </h2>
                  <h3 className="text-xl font-semibold text-[#DE4303] md:text-[14px]">
                    University Partners
                  </h3>
                </div>
              </div>
              <div>
                <p className="text-base font-normal text-[#6B6B6B]">
                  We bridge dreams with experienced counseling and bring your
                  dream university within reach. Our unparalleled support
                  services prepare you to study overseas and build your career
                  path in no time. Discover what you want as we let you know
                  what you need. Your dreams, our expertise.
                </p>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------- */}

          <div className="relative md:hidden">
            <Image
              src="/woman.png"
              alt="Woman"
              width={658}
              height={796}
              className="object-contain"
            />
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------- */}

        <Countries />

        {/* ---------------------------------------------------------------------------------- */}

        <div>
          <div
            className="rounded-[48px] bg-[#FEDB99] pb-[500px] md:rounded-[24px]"
            style={{
              backgroundImage: "url(../../../public/vector12.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container grid grid-cols-3 gap-[81px] md:flex md:flex-col md:gap-[24px]">
              <div>
                <h1 className="pt-[406px] text-[40px] font-semibold md:pt-[48px]">
                  Why Choose Studyzone?
                </h1>
                <p className="mt-[24px] text-[22px] font-normal">
                  Dedication is key, and we have it. We only provide
                  professional services and the best solutions for your
                  satisfaction. Most importantly, we know what we are doing and
                  we are here to help you embark your academic journey.
                </p>
              </div>
              <div className="pt-[72px] md:pt-[24px]">
                <Image
                  src={"/why1.png"}
                  alt="person 1"
                  width={200}
                  height={318}
                ></Image>
                <h1 className="mt-[24px] text-[28px] font-semibold">
                  Strong Industry Presence
                </h1>
                <p className="mt-[16px] text-base font-normal">
                  With over two decades of industry expertise, we know what you
                  need to reach your dream university goal and that makes us
                  really good at what we do!
                </p>
                <Image
                  src={"/why2.png"}
                  alt="person 2"
                  width={200}
                  height={318}
                  className="mt-[48px] md:mt-[24px]"
                />
                <h1 className="mt-[24px] text-[28px] font-semibold">
                  Strong Industry Presence
                </h1>
                <p className="mt-[16px] text-base font-normal">
                  Our counselors truly care. With a keen ear for your
                  preferences, we cater to help you choose the right
                  universities and subjects based on your needs and talents.
                </p>
              </div>
              <div className="pt-[120px] md:pt-[24px]">
                <Image
                  src={"/why3.png"}
                  alt="person 3"
                  width={200}
                  height={318}
                />
                <h1 className="mt-[24px] text-[28px] font-semibold">
                  Strong Industry Presence
                </h1>
                <p className="mt-[16px] text-base font-normal">
                  We have partnered with many institutions that offer you a wide
                  array of choices, and we help you ease your mind from the
                  administrative hassle, from student admissions, visa, housing,
                  and everything else in between.
                </p>
                <Image
                  src={"/why4.png"}
                  alt="person 4"
                  width={200}
                  height={318}
                  className="mt-[48px] md:mt-[24px]"
                />
                <h1 className="mt-[24px] text-[28px] font-semibold">
                  Strong Industry Presence
                </h1>
                <p className="mt-[16px] text-base font-normal">
                  We know our students aren’t just pursuing their higher
                  education, but their dreams and ambitions in eminent
                  universities across the globe. We do our best to help you make
                  your admission and visa applications so seamless so you’ll
                  land in your dream university!{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="mb-[130px] mt-[-300px] md:mb-[80px] md:mt-[-400px]">
            <Services />
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------- */}

        <Events />

        {/* ---------------------------------------------------------------------------------- */}

        <Ask />

        {/* ---------------------------------------------------------------------------------- */}

        <Testimony />

        {/* ---------------------------------------------------------------------------------- */}

        <AskBanner />

        {/* ---------------------------------------------------------------------------------- */}

        <div className="flex flex-row justify-center">
          <div className="shadow-left my-[160px] flex h-[184px] w-[80vw] flex-row items-center justify-between rounded-[12px] border-2 border-[#000000] bg-[#FEDB99] px-[48px] md:my-[80px] md:h-auto md:flex-col md:py-[24px]">
            <div className="mr-[24px] flex max-w-[450px] flex-col md:mr-0 md:justify-center md:text-center">
              <h1 className="text-2xl font-semibold md:text-xl">
                Subscribe to our newsletter
              </h1>
              <h2 className="mt-[4px] line-clamp-3 text-base font-normal md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h2>
            </div>
            <form
              action=""
              className="flex flex-row gap-[12px] md:mt-[24px] md:flex-col"
            >
              <input
                type="text"
                className={`shadow-left h-[60px] ${formWidth} rounded-[4px] border-[1px] border-[#000000] p-[18px]`}
                placeholder="Enter your email"
              />
              <button className="btn-white shadow-left rounded-[12px] px-[36px] py-[16px] text-xl font-semibold md:text-base">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------- */}
      </main>
    </MainLayout>
  );
}

import MainLayout from "@/components/layout/main";
import { AskBanner } from "@/components/ui/ask-banner";
import { Events } from "@/components/ui/events";
import { Testimony } from "@/components/ui/testimony";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const CountryDetails = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("Universities");
    const parsedData = storedData ? JSON.parse(storedData) : {};
    setUniversities(parsedData);
  }, []);

  return (
    <>
      <MainLayout>
        <div className="container flex flex-col items-center gap-[48px] md:gap-[24px]">
          <div className="mx-[114px] mt-[152px] flex flex-row justify-center gap-[72px] md:mx-[24px] md:mt-[92px] md:flex-col md:gap-[24px]">
            <Image
              src={"/Australia.png"}
              alt="Countries"
              width={432}
              height={546}
              className="shadow-left h-full max-h-[546px] w-full max-w-[432px] rounded-[36px] border-2 border-[#001427]"
            />
            <div className="flex flex-col justify-center gap-[24px]">
              <h1 className="text-5xl font-semibold text-[#001427] md:text-4xl">
                Australia
              </h1>
              <p className="text-xl font-medium text-[#363636] md:line-clamp-6 md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <Link
            href={"/contact-us"}
            className="shadow-left mb-[120px] rounded-[12px] border-[1px] border-[#001427] bg-[#DA6E48] px-[36px] py-[20px]"
          >
            <h1 className="text-xl font-semibold text-[#FFFFFF] md:text-center md:text-base">
              Explore Study Overseas Through Free Consultation With Studyzone
            </h1>
          </Link>
        </div>

        {/* ----------------------------------------------------------------------------- */}

        <div
          className="rounded-t-[48px] bg-[#FFFBEF] py-[72px] md:pt-0"
          style={{
            backgroundImage: "url(/vector2.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container flex flex-row items-center gap-[81px] md:flex-col-reverse md:gap-[24px]">
            <div className="flex flex-col gap-[24px]">
              <h1 className="text-4xl font-semibold text-[#001427]">
                The Education System To Study in Australia
              </h1>
              <p className="size-xl text-[#363636]">
                Studying in Australia is a great choice, here’s why: Australian
                universities are rated amongst the best in the world, with 8 of
                them ranked in the Top 100 The Australian University system
                itself is even better than Germany and New Zealand (9th in the
                world) Most universities are located in capital cities that rank
                in the top 30 most liveable cities for students Over
                $200,000,000 is spent annually on international scholarships by
                the Government With a great education system in place, you can
                live, study, work and experience another culture with plenty of
                attractions and transport infrastructure at your fingertips.
              </p>
            </div>
            <Image
              src={"/Australia.png"}
              alt="Countries"
              width={546}
              height={720}
              className="shadow-left h-full max-h-[720px] w-full max-w-[720px] rounded-[36px] border-2 border-[#001427]"
            />
          </div>
        </div>

        {/* ----------------------------------------------------------------------------- */}

        <div
          className="rounded-b-[48px] bg-[#DA6E48] py-[72px]"
          style={{
            backgroundImage: "url(/vector6.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container flex flex-row items-center gap-[81px] md:flex-col">
            <Image
              src={"/Australia.png"}
              alt="Countries"
              width={546}
              height={480}
              className="shadow-left h-full max-h-[480px] w-full max-w-[546px] rounded-[36px] border-2 border-[#001427]"
            />
            <div className="flex flex-col gap-[24px]">
              <h1 className="text-4xl font-semibold text-[#FFFFFF]">
                Why Study in Australia?
              </h1>
              <p className="size-xl text-[#FAFAFA]">
                Studying in Australia is a great choice, here’s why: Australian
                universities are rated amongst the best in the world, with 8 of
                them ranked in the Top 100 The Australian University system
                itself is even better than Germany and New Zealand (9th in the
                world) Most universities are located in capital cities that rank
                in the top 30 most liveable cities for students Over
                $200,000,000 is spent annually on international scholarships by
                the Government With a great education system in place, you can
                live, study, work and experience another culture with plenty of
                attractions and transport infrastructure at your fingertips.
              </p>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------------- */}

        <div className="my-[120px] flex flex-col items-center gap-[48px]">
          <h1 className="text-[40px] font-semibold text-[#191919]">
            Cost of Studying in Australia
          </h1>
          <div>
            <table className="table-auto border">
              <thead className="border">
                <tr>
                  <th className="border px-[16px] py-[20px]">S. No.</th>
                  <th className="border px-[16px] py-[20px]">
                    Study Expenses in Australia for International Students
                  </th>
                  <th className="border px-[16px] py-[20px]">
                    Average fees in AUD*
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-[16px] py-[20px]">1961</td>
                  <td className="border px-[16px] py-[20px]">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="border px-[16px] py-[20px]">
                    Malcolm Lockyer
                  </td>
                </tr>
                <tr>
                  <td className="border px-[16px] py-[20px]">1972</td>
                  <td className="border px-[16px] py-[20px]">Witchy Woman</td>
                  <td className="border px-[16px] py-[20px]">The Eagles</td>
                </tr>
                <tr>
                  <td className="border px-[16px] py-[20px]">1975</td>
                  <td className="border px-[16px] py-[20px]">Shining Star</td>
                  <td className="border px-[16px] py-[20px]">
                    Earth, Wind, and Fire
                  </td>
                </tr>
              </tbody>
            </table>

            {/* ----------------------------------------------------------------------------- */}

            <table className="table-auto border">
              <thead className="border">
                <tr>
                  <th className="border px-[16px] py-[20px]">S. No.</th>
                  <th className="border px-[16px] py-[20px]">
                    Study Expenses in Australia for International Students
                  </th>
                  <th className="border px-[16px] py-[20px]">
                    Average fees in AUD*
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-[16px] py-[20px]">1961</td>
                  <td className="border px-[16px] py-[20px]">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="border px-[16px] py-[20px]">
                    Malcolm Lockyer
                  </td>
                </tr>
                <tr>
                  <td className="border px-[16px] py-[20px]">1972</td>
                  <td className="border px-[16px] py-[20px]">Witchy Woman</td>
                  <td className="border px-[16px] py-[20px]">The Eagles</td>
                </tr>
                <tr>
                  <td className="border px-[16px] py-[20px]">1975</td>
                  <td className="border px-[16px] py-[20px]">Shining Star</td>
                  <td className="border px-[16px] py-[20px]">
                    Earth, Wind, and Fire
                  </td>
                </tr>
              </tbody>
            </table>

            {/* ----------------------------------------------------------------------------- */}

            <table className="table-auto border">
              <thead className="border">
                <tr>
                  <th className="border px-[16px] py-[20px]">S. No.</th>
                  <th className="border px-[16px] py-[20px]">
                    Study Expenses in Australia for International Students
                  </th>
                  <th className="border px-[16px] py-[20px]">
                    Average fees in AUD*
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-[16px] py-[20px]">1961</td>
                  <td className="border px-[16px] py-[20px]">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="border px-[16px] py-[20px]">
                    Malcolm Lockyer
                  </td>
                </tr>
                <tr>
                  <td className="border px-[16px] py-[20px]">1972</td>
                  <td className="border px-[16px] py-[20px]">Witchy Woman</td>
                  <td className="border px-[16px] py-[20px]">The Eagles</td>
                </tr>
                <tr>
                  <td className="border px-[16px] py-[20px]">1975</td>
                  <td className="border px-[16px] py-[20px]">Shining Star</td>
                  <td className="border px-[16px] py-[20px]">
                    Earth, Wind, and Fire
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ----------------------------------------------------------------------------- */}

        <div
          className="rounded-t-[48px] bg-[#337362] py-[72px]"
          style={{
            backgroundImage: "url(/vector3.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container flex flex-row items-center gap-[81px] md:flex-col-reverse">
            <div className="flex flex-col gap-[24px]">
              <h1 className="text-4xl font-semibold text-[#FFFFFF]">
                Career & Industry Insights in Australia
              </h1>
              <p className="size-xl text-[#FAFAFA]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <Image
              src={"/Australia.png"}
              alt="Countries"
              width={546}
              height={480}
              className="shadow-left h-full max-h-[480px] w-full max-w-[546px] rounded-[36px] border-2 border-[#001427]"
            />
          </div>
        </div>

        {/* ----------------------------------------------------------------------------- */}

        <div
          className="rounded-b-[48px] bg-[#DA6E48] py-[72px]"
          style={{
            backgroundImage: "url(/vector6.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container flex flex-row items-center gap-[81px] md:flex-col">
            <Image
              src={"/Australia.png"}
              alt="Countries"
              width={546}
              height={480}
              className="shadow-left h-full max-h-[480px] w-full max-w-[546px] rounded-[36px] border-2 border-[#001427]"
            />
            <div className="flex flex-col gap-[24px]">
              <h1 className="text-4xl font-semibold text-[#FFFFFF]">
                Popular Courses in Australia
              </h1>
              <p className="size-xl text-[#FAFAFA]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------------- */}

        <div className="container flex flex-col items-center justify-center bg-[#FAFAFA] pb-[120px] pt-[160px] md:pt-[80px]">
          <div>
            <h1 className="text-center text-[40px] font-semibold">
              University List
            </h1>
            <h3 className="mt-[12px] text-center text-xl font-normal text-[#7D1418]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h3>
          </div>
          <div className="container grid grid-cols-6 gap-[24px]">
            {universities?.map((university: any, i) => (
              <div
                key={i}
                className="flex justify-center px-[55px] py-[24px] md:px-0"
              >
                <Link
                  href={`/study-destinations/university/${university.title}`}
                >
                  <Image
                    src={university.image}
                    alt={university.title}
                    width={94}
                    height={48}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ----------------------------------------------------------------------------- */}

        <div>
          <div className="mb-[120px]">
            <AskBanner />
          </div>
          <div>
            <Testimony />
          </div>
          <div>
            <Events />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default CountryDetails;

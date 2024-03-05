import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Countries = () => {
  const countries = [
    {
      country: "Australia",
      text: "Embrace the power of innovation and technological progress in Australia to broaden your horizons and pave the way for a promising future!",
      image: "/Australia.png",
      link: "australia",
    },
    {
      country: "United Kingdom",
      text: "Turn your big dream into reality as you pursue studies at the best educational institutions, propelling you toward a rewarding career in the dynamic world of modern technology.",
      image: "/UnitedKingdom.png",
      link: "united-kingdom",
    },
    {
      country: "USA",
      text: "Immerse yourself in the extraordinary cultural diversity and academic excellence of the world's top universities and experience a truly enriching educational journey",
      image: "/America.png",
      link: "america",
    },
    {
      country: "Singapore",
      text: "Challenge yourself in a holistic learning experience offered by top-tier universities, while seizing the chance to contribute to captivating research projects across diverse fields actively.",
      image: "/Singapore.png",
      link: "singapore",
    },
    {
      country: "Malaysia",
      text: "Indulge in a truly immersive educational experience, enhanced by state-of-the-art facilities, cutting-edge technology, and a vibrant multicultural environment brimming with cultural richness.",
      image: "/Malaysia.png",
      link: "malaysia",
    },
    {
      country: "Canada",
      text: "Get a study experience like no other, enjoy Canada's exceptionally friendly environment and high quality of life.",
      image: "/Canada.png",
      link: "canada",
    },
    {
      country: "New Zealand",
      text: "With a remarkable combination of world-class universities and breathtaking natural beauty, it's a dream destination for pursuing studies.",
      image: "/NewZealand.png",
      link: "new-zealand",
    },
    {
      country: "France",
      text: "Dwell into a vibrant tapestry of social scenes while pursuing your studies within one of the world's top-notch education systems and innovation.",
      image: "/France.png",
      link: "france",
    },
  ];

  return (
    <>
      <div className="container flex flex-col items-center justify-center bg-[#FAFAFA] pb-[180px] pt-[160px] md:pt-[80px]">
        <div>
          <h1 className="text-center text-[40px] font-semibold md:text-[28px]">
            Get Your Dream University with Us
          </h1>
          <h3 className="mt-[12px] text-center text-xl font-normal text-[#7D1418] md:text-base">
            Ready to start a new journey? Pick your preferred country
            destination.
          </h3>
        </div>
        <div className="mt-[48px] grid grid-cols-4 gap-[24px] md:grid-cols-1">
          {countries.map((country, i) => (
            <Link
              href={`/study-destinations/${country.link.toLowerCase()}`}
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${country.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              key={i}
              className="shadow-left relative h-[480px] max-w-[318px] rounded-[36px] border-2 border-solid border-[#001427] md:h-[360px]"
            >
              <div className="flex h-full flex-col justify-end px-[24px] pb-[24px]">
                <h1 className="break-all text-[32px] font-medium text-[#FFFFFF]">
                  {country.country}
                </h1>
                <p className="mt-[12px] line-clamp-6 text-sm font-normal text-[#FFFFFF]">
                  {country.text}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-[68px]">
          <Link
            href={"/study-destinations"}
            className="btn-red shadow-left md;py-[16px] content-center rounded-xl px-[36px] py-[20px] text-xl font-semibold text-white md:px-[24px] md:text-base"
          >
            See More Countries
          </Link>
        </div>
      </div>
    </>
  );
};

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("CountriesComponent");
    const parsedData = storedData ? JSON.parse(storedData) : {};
    setCountries(parsedData);
  }, []);

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
          {countries?.map((country: any, i) => (
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

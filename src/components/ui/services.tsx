import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export const Services = () => {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("ServiceServices");
    const parsedData = storedData ? JSON.parse(storedData) : {};
    setServices(parsedData);
  }, []);

  return (
    <>
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
          {services.map((service: any, i: any) => (
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
                <h1 className="mt-[24px] break-normal text-center text-2xl font-semibold text-[#191919] md:text-base">
                  {service.service}
                </h1>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-[68px] md:mt-[48px]">
          <Link
            href={"/service"}
            className="btn-cream shadow-left content-center rounded-xl px-[36px] py-[20px] text-xl font-semibold md:text-base"
          >
            More Services
          </Link>
        </div>
      </div>
    </>
  );
};

import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Menu = ({ setVis }: any) => {
  const navigations = [
    { name: "Study Destinations", link: "study-destinations" },
    { name: "Services", link: "services" },
    { name: "English Test", link: "english-test", hasImage: true },
    { name: "Events", link: "events" },
    { name: "Insights", link: "insights" },
    { name: "About Us", link: "about-us" },
  ];

  return (
    <>
      <div className="darken-overlay" />
      <div className="fixed right-0 z-50 h-full w-[75%] bg-[#fafafa] text-[#191919]">
        <div className="flex flex-col gap-12 p-4">
          <div className="flex flex-row justify-between">
            <Link href={"/"}>
              <img
                className="h-[54px] w-[auto] object-contain md:h-[36px]"
                src="https://www.studyzone.co.id/wp-content/uploads/2023/07/Logo-Studyzone.png"
                alt="Logo"
              />
            </Link>
            <button onClick={() => setVis(false)}>
              <Image src={"/Close.png"} alt="menu" width={36} height={36} />
            </button>
          </div>

          {/* -------------------------------------------------------------- */}

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-10">
              {Array.isArray(navigations) &&
                navigations?.map((nav, i) => (
                  <Link key={i} href={`/${nav.link}`}>
                    {nav.name}
                  </Link>
                ))}
            </div>

            <div className="flex flex-col gap-10">
              <Link
                className="btn-cream shadow-left h-[48px] max-w-[170px] rounded-[12px] px-[20px] py-[12px] text-base font-semibold text-[#000000]"
                href={"/contact-us"}
              >
                Contact Us Now
              </Link>
              <button className="flex flex-row items-center gap-[4px]">
                <img src="data:image/svg+xml;utf8,%3Csvg width='21' height='15' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='a'%3E%3Cstop stop-color='%23FFF' offset='0%'/%3E%3Cstop stop-color='%23F0F0F0' offset='100%'/%3E%3C/linearGradient%3E%3ClinearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='b'%3E%3Cstop stop-color='%23D02F44' offset='0%'/%3E%3Cstop stop-color='%23B12537' offset='100%'/%3E%3C/linearGradient%3E%3ClinearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='c'%3E%3Cstop stop-color='%2346467F' offset='0%'/%3E%3Cstop stop-color='%233C3C6D' offset='100%'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='url(%23a)' d='M0 0h21v15H0z'/%3E%3Cpath d='M0 0h21v1H0V0zm0 2h21v1H0V2zm0 2h21v1H0V4zm0 2h21v1H0V6zm0 2h21v1H0V8zm0 2h21v1H0v-1zm0 2h21v1H0v-1zm0 2h21v1H0v-1z' fill='url(%23b)'/%3E%3Cpath fill='url(%23c)' d='M0 0h9v7H0z'/%3E%3Cpath d='M1.5 2a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm-5 1a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm1 1a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm1 1a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm1 1a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1z' fill='url(%23a)'/%3E%3C/g%3E%3C/svg%3E"></img>
                EN
                <img src="/expand_more.png" alt="Image" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

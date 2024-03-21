import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = ({ setVis }: any) => {
  const [englishTestOpen, setEnglishTestOpen] = useState(false);
  let timeoutId: any;

  const handleMouseEnter = () => {
    setEnglishTestOpen(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setEnglishTestOpen(false);
    }, 100);
  };

  const navigations = [
    { name: "Study Destinations", link: "study-destinations" },
    { name: "Services", link: "services" },
    { name: "English Test", link: "english-test", hasImage: true },
    { name: "Events", link: "events" },
    { name: "Insights", link: "insights" },
    { name: "About Us", link: "about-us" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-[#fafafa] text-[#191919]">
      {/* ----------------------------------------------------------------------------------------- */}

      <div
        className="container flex h-[80px] flex-row items-center
    justify-between md:h-[68px]"
      >
        <Link href={"/"}>
          <img
            className="h-[54px] w-[auto] object-contain md:h-[36px]"
            src="https://www.studyzone.co.id/wp-content/uploads/2023/07/Logo-Studyzone.png"
            alt="Logo"
          />
        </Link>

        <button className="header-show hidden" onClick={() => setVis(true)}>
          <Image src={"/menu.png"} alt="menu" width={36} height={36} />
        </button>

        {/* ----------------------------------------------------------------------------------------- */}

        <div className="header-hidden flex flex-row gap-[20px] font-medium">
          {navigations?.map((nav) => (
            <div className="flex flex-row text-sm" key={nav.link}>
              {nav.hasImage ? (
                <div className="flex flex-row">
                  <Link
                    className="relative flex flex-row items-center gap-[4px]"
                    href={`/${nav.link}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {nav.name}
                    <img src="/expand_more.png" alt="Image" />
                    {englishTestOpen && (
                      <div
                        onMouseLeave={handleMouseLeave}
                        className="absolute top-[70%] mt-2 w-full rounded border border-gray-200 bg-white shadow-md"
                      >
                        <ul className="py-1">
                          <Link href="/english-test/pte">
                            <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                              PTE
                            </li>
                          </Link>
                          <Link href="/english-test/toefl">
                            <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                              TOEFL
                            </li>
                          </Link>
                          <Link href="/english-test/ielts">
                            <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                              IELTS
                            </li>
                          </Link>
                        </ul>
                      </div>
                    )}
                  </Link>
                </div>
              ) : (
                <Link href={`/${nav.link}`}>{nav.name}</Link>
              )}
            </div>
          ))}
        </div>

        {/* ----------------------------------------------------------------------------------------- */}

        <div className="header-hidden flex">
          <Link
            className="btn-cream shadow-left mr-[12px] h-[48px] rounded-[12px] px-[20px] py-[12px] text-base font-semibold text-[#000000]"
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

        {/* ----------------------------------------------------------------------------------------- */}
      </div>
    </header>
  );
};

export default Navbar;

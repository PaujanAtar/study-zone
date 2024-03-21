import data from "@/data/pages/dashboard/dashboard-pages.json";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const DashboardSidebar = () => {
  const router = useRouter();

  const pages = data;

  return (
    <div className="fixed h-full w-[16rem] bg-[#DA6E48]">
      <div className="m-6 flex flex-row justify-between">
        <Link href={"/dashboard"}>
          <img
            src={
              "https://www.studyzone.co.id/wp-content/uploads/2023/07/Logo-Studyzone.png"
            }
            alt="logo"
            width={130}
            height={40}
          />
        </Link>
        <button>
          {/* <Image src={"/backevents.png"} alt="button" width={26} height={26} /> */}
        </button>
      </div>
      <div className="m-6 flex flex-col gap-1">
        {Array.isArray(pages) &&
          pages?.map((page, i) => (
            <Link
              key={i}
              href={page.link}
              className={`rounded-lg p-3 hover:bg-[#FEDB99] ${router.pathname === page.link ? "bg-[#FEDB99]" : ""}`}
            >
              <h1 className="font-bold">{page.title}</h1>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;

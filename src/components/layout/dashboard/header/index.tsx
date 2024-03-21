import React from "react";
import data from "@/data/pages/dashboard/dashboard-pages.json";
import { useRouter } from "next/router";

const DashboardHeader = () => {
  const router = useRouter();
  const currentPage = data.find((page) => page.link === router.pathname);
  const title = currentPage ? currentPage.title.toUpperCase() : "MAIN";
  return (
    <div className="ml-64 py-6 shadow">
      <h1 className="pl-6 text-5xl">{title}</h1>
    </div>
  );
};

export default DashboardHeader;

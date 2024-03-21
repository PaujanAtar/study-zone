import React, { Fragment } from "react";
import { useState } from "react";
import Header from "./header/index";
import Sidebar from "./sidebar/index";
import Footer from "./footer/index";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Sidebar />
      <Header />
      {children}
      {/* <Footer /> */}
    </Fragment>
  );
};

export default DashboardLayout;

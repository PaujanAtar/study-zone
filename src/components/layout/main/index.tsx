import React, { Fragment } from "react";
import Navbar from "./header";
import Footer from "./footer";
import Menu from "./header/menu";
import { useState } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Fragment>
      <Navbar setVis={setVisible} />
      {visible && <Menu setVis={setVisible} />}
      {children}
      <Footer />
    </Fragment>
  );
};

export default MainLayout;

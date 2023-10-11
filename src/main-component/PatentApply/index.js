import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Logo from "../../images/header-logo.png";
import Contents from "./contents";

const PatentApply = () => {
  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <Contents />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default PatentApply;

import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Logo from "../../images/header-logo.png";
import Contents from "./Contents";

const MyPage = () => {
  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <Contents blLeft={"order-md-1"} blRight={"order-md-2"} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default MyPage;

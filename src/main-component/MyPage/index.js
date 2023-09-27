import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import BlogList from "../../components/BlogList";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Logo from "../../images/logo.svg";
import Contents from "./Contents";

const MyPage = () => {
  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <Contents />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default MyPage;

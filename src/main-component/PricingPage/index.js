import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Pricing from "../../components/Pricing";
import Logo from "../../images/header-logo.png";

const PricingPage = () => {
  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle
        pageTitle={"인디프로(Indieipro)"}
        pageSubTitle={"당신의 아이디어를 더 빛나게 해 줄 단 하나의 특허출원 솔루션"}
      />
      <Pricing />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default PricingPage;

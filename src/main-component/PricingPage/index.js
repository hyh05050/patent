import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Pricing from "../../components/Pricing";
import Logo from "../../images/logo.svg";

const PricingPage = () => {
  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle pageTitle={"비용안내"} pagesub={"비용안내"} />
      <Pricing />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default PricingPage;

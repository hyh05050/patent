import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/hero";
import Features from "../../components/Features";
import Consulting from "../../components/Consulting";
import Practice from "../../components/Practice";
import CaseStudies from "../../components/CaseStudies";
import Testimonial from "../../components/Testimonial";
import Attorney from "../../components/attorneys";
import Consultinencey from "../../components/Consultinencey";
import BlogSection from "../../components/BlogSection";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Logo from "../../images/logo.svg";
import PracticeS2 from "../../components/PracticeS2";
import Features2 from "../../components/Features2";
import About from "../../components/about";
import AboutLeft from "../../components/about/index-left";
import PageEndTitle from "../../components/pagetitle/index-end";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <Hero />
      <About />
      <AboutLeft />
      <Features2 />
      <Features />
      <PracticeS2 />
      <Testimonial />
      <Practice />
      <PageEndTitle />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage;

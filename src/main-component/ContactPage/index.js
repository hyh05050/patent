import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Contactpage from "../../components/Contactpage";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Logo from "../../images/logo.svg";

const ContactPage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle
                pageTitle={"당신의 아이디어를 더 빛나게 해 줄 단 하나의 특허출원 솔루션, 인디프로"}
                pagesub={"QnA"}
            />
            <Contactpage />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};
export default ContactPage;

import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Logo from "../../images/header-logo.png";

const TermPage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <div>
            <h1>TermPage</h1>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default TermPage;
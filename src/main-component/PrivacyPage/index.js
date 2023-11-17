import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Logo from "../../images/header-logo.png";


const PrivacyPage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <div>
            <h1>PrivacyPage</h1>
            </div>
            <Footer />
            <Scrollbar />

        </Fragment>
    );
}
export default PrivacyPage;
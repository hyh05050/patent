import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import FaqSection from './FaqSection'
import GetinTouch from '../../components/GetinTouch'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.svg'

const FaqPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'FAQ'} pagesub={'FAQ'}/> 
                <section className="wpo-faq-section section-padding">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="wpo-section-title">
                                    <h2>Frequently Asked Question</h2>
                                </div>
                            </div>
                            <div className="col-lg-8 offset-lg-2">
                                <div className="wpo-faq-section">
                                    <div className="row">
                                        <div className="col-lg-12 col-12">
                                            <FaqSection/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <GetinTouch/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default FaqPage;


import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero'
import Features from '../../components/Features'
import Consulting from '../../components/Consulting'
import Practice from '../../components/Practice'
import CaseStudies from '../../components/CaseStudies'
import Testimonial from '../../components/Testimonial'
import Attorney from '../../components/attorneys'
import Consultinencey from '../../components/Consultinencey'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.svg'


const HomePage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <Hero/>
            <Features/>
            <Consulting/>
            <Practice/>
            <CaseStudies/>
            <Testimonial/>
            <Attorney/>
            <Consultinencey/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;
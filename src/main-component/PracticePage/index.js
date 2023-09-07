import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Practice from '../../components/Practice'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.svg'

const PracticePage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Practice'} pagesub={'Practice'}/> 
            <Practice/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PracticePage;


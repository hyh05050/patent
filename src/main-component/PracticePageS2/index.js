import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import PracticeS2 from '../../components/PracticeS2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.svg'

const PracticePageS2 =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Practice'} pagesub={'Practice'}/> 
            <PracticeS2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PracticePageS2;


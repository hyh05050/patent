import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Attorney from '../../components/attorneys'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.svg'


const AttorneysPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Attorneys'} pagesub={'Attorney'}/> 
            <Attorney/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AttorneysPage;

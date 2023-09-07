import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Shop from '../../components/Shop'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.svg'

const ShopPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Shop'} pagesub={'Shop'}/> 
            <Shop/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ShopPage;


import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import ShopSingle from '../../components/shopsingle'
import {useParams} from 'react-router-dom'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Prtoducts from '../../api/product'
import Logo from '../../images/logo.svg'


const ShopSinglePage =() => {

    const {id} = useParams()

    const ProductDetails = Prtoducts.find( item => item.id === id)

    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={ProductDetails.title} pagesub={'Shop'}/> 
            <ShopSingle/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ShopSinglePage;


import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HeaderTopbar from '../../components/HeaderTopbar'
import MobileMenu from '../../components/MobileMenu'
import Prtoducts from '../../api/product'


export default class Header extends Component {

    state = {
        isSearchShow: false,
        isCartShow: false,
    }

    searchHandler = () => {
        this.setState({
            isSearchShow: !this.state.isSearchShow
        })
    }
    cartHandler = () => {
        this.setState({
            isCartShow: !this.state.isCartShow
        })
    }





    render() {
        const { isSearchShow, isCartShow } = this.state;

        const SubmitHandler = (e) => {
            e.preventDefault()
        }

        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }
        return (
            <header id="header" className={this.props.topbarNone}>
                <HeaderTopbar/>
                <div className={`wpo-site-header ${this.props.hclass}`}>
                    <nav className="navigation navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                    <div className="mobail-menu">
                                        <MobileMenu />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="navbar-header">
                                        <Link onClick={ClickHandler} className="navbar-brand" to="/home"><img src={this.props.Logo}
                                            alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-1 col-1">
                                    <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                        <button className="menu-close"><i className="ti-close"></i></button>
                                        <ul className="nav navbar-nav mb-2 mb-lg-0">
                                            <li className="menu-item-has-children">
                                                <Link onClick={ClickHandler} to="/">Home</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/home">Home style 1</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home2">Home style 2</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home3">Home style 3</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                            <li className="menu-item-has-children">
                                                <Link to="/">Pages</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/attorneys">Attorneys</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/attorneys-single/1">Attorneys single</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/pricing">Pricing</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/404">404 Error</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/login">Login</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/register">Register</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="/practice">Practice Area</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/practice">Practice Area</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/practice-s2">Practice Style 2</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/practice-single/1">Practice Single</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="/case">Cases</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/case">Cases</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/case-single/1">Cases Single</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="/shop">Shop</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/shop">Shop</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/shop-single/1">Shop Single</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/cart">Cart</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/checkout">Checkout</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link onClick={ClickHandler} to="/blog">Blog</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/blog">Blog right sidebar</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog fullwidth</Link></li>
                                                    <li className="menu-item-has-children">
                                                        <Link onClick={ClickHandler} to="/">Blog details</Link>
                                                        <ul className="sub-menu">
                                                            <li><Link onClick={ClickHandler} to="/blog-single/1">Blog details right sidebar</Link>
                                                            </li>
                                                            <li><Link onClick={ClickHandler} to="/blog-single-left-sidebar/1">Blog details left
                                                                sidebar</Link></li>
                                                            <li><Link onClick={ClickHandler} to="/blog-single-fullwidth/1">Blog details
                                                                fullwidth</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-2 col-2">
                                    <div className="header-right">
                                        <div className="header-search-form-wrapper">
                                            <div className="cart-search-contact">
                                                <button onClick={this.searchHandler} className="search-toggle-btn"><i
                                                    className={`${isSearchShow ? 'ti-close' : 'ti-search'}`}></i></button>
                                                <div className={`header-search-form ${isSearchShow ? 'header-search-content-toggle' : ''}`}>
                                                    <form onSubmit={SubmitHandler}>
                                                        <div>
                                                            <input type="text" className="form-control"
                                                                placeholder="Search here..." />
                                                            <button type="submit"><i
                                                                className="fi flaticon-loupe"></i></button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mini-cart">
                                            <button className="cart-toggle-btn" onClick={this.cartHandler}> <i className="fi flaticon-shopping-cart"></i> <span
                                                className="cart-count">2</span></button>
                                            <div className={`mini-cart-content ${isCartShow ? 'mini-cart-content-toggle' : ''}`}>
                                                <button className="mini-cart-close" onClick={this.cartHandler}><i className="ti-close"></i></button>
                                                <div className="mini-cart-items">
                                                    {Prtoducts.slice(0, 3).map( (item, en) => (
                                                        <div className="mini-cart-item clearfix" key={en}>
                                                            <div className="mini-cart-item-image">
                                                                <Link onClick={ClickHandler} to={`/shop-single/${item.id}`}><img
                                                                    src={item.shopImg} alt="" /></Link>
                                                            </div>
                                                            <div className="mini-cart-item-des">
                                                                <Link onClick={ClickHandler} to={`/shop-single/${item.id}`}>{item.title}</Link>
                                                                <span className="mini-cart-item-price">{item.price} x 1</span>
                                                                <span className="mini-cart-item-quantity"><Link to="#"><i
                                                                    className="ti-close"></i></Link></span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="mini-cart-action clearfix">
                                                    <span className="mini-checkout-price">Subtotal: <span>$215.14</span></span>
                                                    <div className="mini-btn">
                                                        <Link to="/checkout" className="view-cart-btn s1">Checkout</Link>
                                                        <Link to="/cart" className="view-cart-btn">View Cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="close-form">
                                            <Link onClick={ClickHandler} className="theme-btn" to="/contact">Free Consulting</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

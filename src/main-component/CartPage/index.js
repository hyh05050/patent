import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import {Link} from 'react-router-dom'
import Prtoducts from '../../api/product'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Quantity from './quantity'
import Logo from '../../images/logo.svg'

const CartPage =() => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Cart'} pagesub={'Cart'}/> 
            <div className="cart-area section-padding">
                <div className="container">
                    <div className="form">
                        <div className="cart-wrapper">
                            <div className="row">
                                <div className="col-12">
                                    <form action="cart">
                                        <table className="table-responsive cart-wrap">
                                            <thead>
                                                <tr>
                                                    <th className="images images-b">Image</th>
                                                    <th className="product-2">Product Name</th>
                                                    <th className="pr">Quantity</th>
                                                    <th className="ptice">Price</th>
                                                    <th className="stock">Total Price</th>
                                                    <th className="remove remove-b">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Prtoducts.map( (item, en) => (
                                                        <tr key={en}>                     
                                                            <td className="images"><img src={item.shopImg} alt=""/></td>
                                                            <td className="product">
                                                                <ul>
                                                                    <li className="first-cart"><Link onClick={ClickHandler} to={`/shop-single/${item.id}`}>{item.title}</Link></li>
                                                                    <li>Brand : Law</li>
                                                                    <li>Size : Small</li>
                                                                </ul>
                                                            </td>
                                                            <td className="stock">
                                                                <ul className="input-style">
                                                                    <li className="quantity cart-plus-minus">
                                                                        <Quantity/>
                                                                    </li>
                                                                </ul>
                                                            </td>
                                                            <td className="ptice">$ {item.price}</td>
                                                            <td className="stock">$ {item.price}</td>
                                                            <td className="action">
                                                                <ul>
                                                                    <li className="w-btn"><Link onClick={ClickHandler} data-bs-toggle="tooltip"
                                                                            data-bs-html="true" title="Remove from Cart" to="/cart"><i
                                                                                className="fi fa fa-trash"></i></Link></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                    ))}
                                            </tbody>
                                        </table>
                                    </form>
                                    <div className="submit-btn-area">
                                        <ul>
                                            <li><Link className="theme-btn" onClick={ClickHandler} to="/shop">Continue Shopping</Link></li>
                                            <li><button type="submit">Update Cart</button></li>
                                        </ul>
                                    </div>
                                    <div className="cart-product-list">
                                        <ul>
                                            <li>Total product<span>( 05 )</span></li>
                                            <li>Sub Price<span>$2250</span></li>
                                            <li>Vat<span>$50</span></li>
                                            <li>Eco Tax<span>$100</span></li>
                                            <li>Delivery Charge<span>$100</span></li>
                                            <li className="cart-b">Total Price<span>$2500</span></li>
                                        </ul>
                                    </div>

                                    <div className="submit-btn-area">
                                        <ul>
                                            <li><Link onClick={ClickHandler} className="theme-btn" to="/checkout">Proceed to Checkout</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CartPage;


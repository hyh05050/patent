import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import Homepage3 from '../HomePage3'
import AboutPage from '../AboutPage'
import PracticePage from '../PracticePage'
import PracticePageS2 from '../PracticePageS2'
import PracticeSinglePage from '../PracticeSinglePage'
import CasePage from '../CasePage'
import CheckoutPage from '../CheckoutPage'
import caseSinglePage from '../CaseSinglePage'
import AttorneysPage from '../AttorneysPage'
import AttorneySinglePage from '../AttorneySinglePage'
import PricingPage from '../PricingPage'
import ShopPage from '../ShopPage'
import ShopSinglePage from '../ShopSinglePage'
import CartPage from '../CartPage'
import BlogPage from '../BlogPage'
import BlogPageLeft from '../BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide'
import ContactPage from '../ContactPage'
import ErrorPage from '../ErrorPage'
import FaqPage from '../FaqPage'
import LoginPage from '../LoginPage' 
import SignUpPage from '../SignUpPage' 
import ForgotPassword from '../ForgotPassword' 
      

const AllRoute = () => { 

  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/home' component={Homepage} />
            <Route path='/contact' component={ContactPage}/> 
            <Route path='/home2' component={Homepage2} />
            <Route path='/home3' component={Homepage3} />
            <Route path='/about' component={AboutPage} />
            <Route path='/attorneys' component={AttorneysPage} />
            <Route path='/pricing' component={PricingPage} />
            <Route path='/practice' component={PracticePage}/>
            <Route path='/practice-s2' component={PracticePageS2}/>
            <Route path='/practice-single/:id' component={PracticeSinglePage}/>
            <Route path='/case' component={CasePage}/>
            <Route path='/case-single/:id' component={caseSinglePage}/>
            <Route path='/attorneys-single/:id' component={AttorneySinglePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/shop-single/:id' component={ShopSinglePage}/>
            <Route path='/cart' component={CartPage}/>
            <Route path='/checkout' component={CheckoutPage}/>
            <Route path='/blog-single/:id' component={BlogDetails}/> 
            <Route path='/blog-single-left-sidebar/:id' component={BlogDetailsLeftSiide}/> 
            <Route path='/blog-single-fullwidth/:id' component={BlogDetailsFull}/> 
            <Route path='/blog' component={BlogPage}/> 
            <Route path='/blog-left-sidebar' component={BlogPageLeft}/>
            <Route path='/blog-fullwidth' component={BlogPageFullwidth}/>
            <Route path='/faq' component={FaqPage}/>
            <Route path='/404' component={ErrorPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/register' component={SignUpPage}/>
            <Route path='/forgot-password' component={ForgotPassword}/>
          </Switch>
      </Router>
      
    </div>
  );
}

export default AllRoute;

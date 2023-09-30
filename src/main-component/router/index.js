import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "../HomePage";
import AboutPage from "../AboutPage";
import PricingPage from "../PricingPage";
import ContactPage from "../ContactPage";
import ErrorPage from "../ErrorPage";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import MyPage from "../MyPage";
import Apply from "../PatentApply";
import ForgotPassword from "../ForgotPassword";
import { ProtectedRoute } from "./ProtectedRoute";

const AllRoute = () => {
    return (
        <div className="App">
            <Router basename="/patent">
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/home" component={Homepage} />
                    <Route path="/qna" component={ContactPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/pricing" component={PricingPage} />
                    <Route path="/404" component={ErrorPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={SignUpPage} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <ProtectedRoute path="/mypage" component={MyPage} />
                    <ProtectedRoute path="/apply" component={Apply} />
                </Switch>
            </Router>
        </div>
    );
};

export default AllRoute;

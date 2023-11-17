import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutPage from "../AboutPage";
import ContactPage from "../ContactPage";
import ErrorPage from "../ErrorPage";
import ForgotPassword from "../ForgotPassword";
import Homepage from "../HomePage";
import LoginPage from "../LoginPage";
import MyPage from "../MyPage";
import Apply from "../PatentApply";
import PricingPage from "../PricingPage";
import PrivacyPage from "../PrivacyPage";
import SignUpPage from "../SignUpPage";
import TermPage from "../TermPage";
import { ProtectedRoute } from "./ProtectedRoute";

const AllRoute = () => {
  return (
    <div className="App">
      <Router>
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
          <Route path="/term" component={TermPage} />
          <Route path="/privacy" component={PrivacyPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default AllRoute;

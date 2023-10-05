import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getLoginInfo } from "../../common/loginInfo";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isLogin = getLoginInfo()?.isLogin;
    console.log("isLogin:" + isLogin);
    return <Route {...rest} render={(props) => (isLogin ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

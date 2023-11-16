import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getAccount } from "../../common/loginInfo";
import { consoleLog } from "../../common";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLogin = getAccount()?.isLogin;
  consoleLog("isLogin:" + isLogin);
  return <Route {...rest} render={(props) => (isLogin ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

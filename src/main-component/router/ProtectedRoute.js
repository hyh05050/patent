import React from "react";
import { getCookie } from "../../common/cookie";
import { Redirect, Route } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLogin = getCookie("isLogin");
  console.log("isLogin:" + isLogin);
  return <Route {...rest} render={(props) => (isLogin ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

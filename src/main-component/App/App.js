import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import MainProvider from "../../common/provider/MainProvider";
import ModalProvider from "../../common/provider/ModalProvider";
import AllRoute from "../router";

import { GoogleOAuthProvider } from "@react-oauth/google";
import "react-toastify/dist/ReactToastify.css";
import { checkAccessToken, doRefreshToken, getAccessToken, removeAccount, setAccessToken, setRefreshToken } from "../../common/loginInfo";
import "../../sass/style.scss";

const App = () => {
  const queryClient = new QueryClient();
  useEffect(() => {
    if(getAccessToken() === null) return;
    checkAccessToken().then((validation)=>{
      console.log("check access token", validation);
      if(validation !== -1 && !validation){
        console.log("refresh token");
        doRefreshToken().then((res)=>{
          console.log("refresh token response", res);
          if(res.data.status === "success"){
            console.log("refresh token success");
            setAccessToken(res.data.data.accessToken);
            setRefreshToken(res.data.data.refreshToken);
          }else{
            console.log("refresh token fail");
            removeAccount();
            alert("로그인이 만료되었습니다. 다시 로그인해주세요.");
            window.location.href = "/login";
          }
        }).catch((e)=>{
          console.log("Error on refresh token", e);
        });
      }
    }).catch((e)=>{
      console.log("Error on check access token", e);
    });
  }, []);
  return (
    <div className="App" id="scrool">
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ModalProvider />
          <MainProvider>
            <GoogleOAuthProvider clientId="1009040634997-4h545h3htq3csa2bqmn09oo3b43d3q22.apps.googleusercontent.com">
              <AllRoute />
            </GoogleOAuthProvider>
          </MainProvider>
          <ToastContainer />
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
};

export default App;

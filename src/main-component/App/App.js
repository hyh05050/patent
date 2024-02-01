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
import { set } from "react-hook-form";
import { setAxiosAccessToken } from "../../api/axios/config";

const App = () => {
  const queryClient = new QueryClient();
  const [tryRefresh, setTryRefresh] = React.useState(false);
  useEffect(() => {
    if(getAccessToken() === null) return;
    checkAccessToken().then((validation)=>{
      if(tryRefresh) return;
      if(validation !== -1 && !validation){
        doRefreshToken().then((res)=>{
          if(res.data.status === "success"){
            setAccessToken(res.data.authToken);
            setAxiosAccessToken(res.data.authToken);
            setRefreshToken(res.data.refreshToken);
          } else {
            console.log("refresh token fail");
            removeAccount();
            if(!tryRefresh) {
              alert("로그인 정보가 만료되었습니다. 다시 로그인 해주세요.");
              window.location.reload();
            }
          }
          setTryRefresh(true);
        }).catch((e)=>{
          console.log("Error on refresh token", e);
        });
      }
    }).catch((e)=>{
      console.log("Error on check access token", e);
    });
  }, [tryRefresh]);
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

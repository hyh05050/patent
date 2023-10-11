import React from "react";
import AllRoute from "../router";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import MainProvider from "../../common/provider/MainProvider";
import ModalProvider from "../../common/provider/ModalProvider";

import "react-toastify/dist/ReactToastify.css";
import "../../sass/style.scss";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  const queryClient = new QueryClient();
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

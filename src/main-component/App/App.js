import React from "react";
import AllRoute from "../router";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import MainProvider from "../../common/provider/MainProvider";
import ModalProvider from "../../common/provider/ModalProvider";

import "react-toastify/dist/ReactToastify.css";
import "../../sass/style.scss";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <div className="App" id="scrool">
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ModalProvider />
          <MainProvider>
            <AllRoute />
          </MainProvider>
          <ToastContainer />
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
};

export default App;

import React from "react";
import AllRoute from "../router";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import "../../sass/style.scss";
import { MainProvider } from "../../common/MainProvider";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <div className="App" id="scrool">
      <QueryClientProvider client={queryClient}>
        <MainProvider>
          <AllRoute />
        </MainProvider>
        <ToastContainer />
      </QueryClientProvider>
    </div>
  );
};

export default App;

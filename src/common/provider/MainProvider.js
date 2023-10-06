import React, { createContext, useState } from "react";

export const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [isDev, setIsDev] = useState(false);

  return <MainContext.Provider value={isDev}>{children}</MainContext.Provider>;
};

export default MainProvider;

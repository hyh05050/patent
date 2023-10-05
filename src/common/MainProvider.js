import React, { createContext, useState } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [isDev, setIsDev] = useState(false);

  return <MainContext.Provider value={isDev}>{children}</MainContext.Provider>;
};

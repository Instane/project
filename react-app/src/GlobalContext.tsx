import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext(1);

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
  const [currentpage, setCurrentPage] = useState(1);

  return (
    <GlobalContext.Provider value={{ currentpage, setCurrentPage }}>
      {children}
    </GlobalContext.Provider>
  );
};

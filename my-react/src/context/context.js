import React, { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const [dataOps, setDataOps] = useState();
  const [safeTextData, setSafeTextData] = useState();

  const contextValue = { 
    data, 
    setData, 
    dataOps, 
    setDataOps,
    safeTextData,
    setSafeTextData
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };

// MyContext.js
import React, { createContext, useState, useEffect } from "react";

const MyContext = createContext();

const getInitialValue = () => {
  const savedValue = localStorage.getItem("myValue");
  return savedValue ? JSON.parse(savedValue) : 0;
};

export const MyProvider = ({ children }) => {
  const [value, setValue] = useState(getInitialValue);

  useEffect(() => {
    localStorage.setItem("myValue", JSON.stringify(value));
  }, [value]);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;

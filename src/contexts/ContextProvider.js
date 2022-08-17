import React, { useContext, createContext, useState } from "react";

const stateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIssClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clicked) => {
    setIssClicked({ ...initialState, [clicked]: true });
  };

  return (
    <stateContext.Provider
      value={{
        handleClick,
        activeMenu,
        setActiveMenu,
        isClicked,
        setIssClicked,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);

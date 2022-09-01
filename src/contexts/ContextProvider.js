import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [themeSettings, setThemeSettings] = useState(false);
    const [activeMenu, setActiveMenu] = useState(true);
    const [Menu, setMenu] = useState('Visit System');
    const [isClicked, setIsClicked] = useState(initialState);
  
    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
  
    return (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <StateContext.Provider value={{ activeMenu, handleClick, isClicked, Menu, setMenu, initialState, setIsClicked, setActiveMenu, themeSettings, setThemeSettings }}>
        {children}
      </StateContext.Provider>
    );
  };
  
  export const useStateContext = () => useContext(StateContext);
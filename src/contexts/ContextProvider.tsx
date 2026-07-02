import { useState } from "react";
import type { ReactNode } from "react";
import { StateContext, initialState } from "./StateContext.ts";

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState<number>();
  const [currentMode, setCurrentMode] = useState("Light");
  const [isClicked, setIsClicked] = useState(initialState);
  const [themeSettings, setThemeSettings] = useState(false);
  const [currentColor, setCurrentColor] = useState("#03C9D7");

  const setMode = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked: keyof typeof initialState) => {
    setIsClicked({
      ...initialState,
      [clicked]: true,
    });
  };

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

import { createContext } from "react";

export interface InitialState {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
}

export interface StateContextType {
  currentColor: string;
  currentMode: string;
  activeMenu: boolean;
  screenSize: number | undefined;
  setScreenSize: React.Dispatch<React.SetStateAction<number | undefined>>;
  handleClick: (clicked: keyof InitialState) => void;
  isClicked: InitialState;
  initialState: InitialState;
  setIsClicked: React.Dispatch<React.SetStateAction<InitialState>>;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
  setCurrentMode: React.Dispatch<React.SetStateAction<string>>;
  setMode: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  setColor: (color: string) => void;
  themeSettings: boolean;
  setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

export const initialState: InitialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const StateContext = createContext<StateContextType | undefined>(
  undefined,
);

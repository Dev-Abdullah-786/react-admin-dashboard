import { useContext } from "react";
import { StateContext, type StateContextType } from "./StateContext";

export const useStateContext = (): StateContextType => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("useStateContext must be used inside ContextProvider");
  }

  return context;
};

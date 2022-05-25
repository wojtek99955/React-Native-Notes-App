import React from "react";
import { createContext, useState } from "react";

export const Context = createContext();

function ContextProvider({ children }) {
  const [notes, setNotes] = useState([]);
  return (
    <Context.Provider value={{ notes, setNotes }}>{children}</Context.Provider>
  );
}

export default ContextProvider;

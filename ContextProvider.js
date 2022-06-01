import { createContext, useState } from "react";

export const Context = createContext();

function ContextProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [searchNote, setSearchNote] = useState("");
  const [fontSize, setFontSize] = useState({ name: "medium", size: 25 });
  const [fontColor, setFontColor] = useState("");

  return (
    <Context.Provider
      value={{
        notes,
        setNotes,
        searchNote,
        setSearchNote,
        fontSize,
        setFontSize,
        fontColor,
        setFontColor,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;

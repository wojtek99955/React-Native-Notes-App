import { createContext, useState } from "react";
import { Appearance } from "react-native";

export const Context = createContext();

function ContextProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [searchNote, setSearchNote] = useState("");
  const [fontSize, setFontSize] = useState({ name: "medium", size: 25 });
  const [fontColor, setFontColor] = useState({ name: "black", hex: "#000000" });
  const theme = Appearance.getColorScheme();

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
        theme,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;

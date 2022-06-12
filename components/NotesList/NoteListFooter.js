import { View, Text } from "react-native";
import { useContext } from "react";
import { IconContainer } from "./NotesListStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Context } from "../../ContextProvider";

const NoteListFooter = ({ navigation }) => {
  const ctx = useContext(Context);
  const { notes } = ctx;
  if (notes.length > 2) {
    return (
      <IconContainer onPress={() => navigation.navigate("Create Note")}>
        <Ionicons name="add-circle" color="#fdbe00" size={60} />
      </IconContainer>
    );
  } else {
    return null;
  }
};
export default NoteListFooter;

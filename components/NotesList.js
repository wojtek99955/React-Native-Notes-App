import { View, Text, FlatList } from "react-native";
import { useContext } from "react";
import { Context } from "../ContextProvider";
import Note from "./Note";

const NoteList = () => {
  const ctx = useContext(Context);
  const { notes } = ctx;

  console.log(notes);
  return (
    <View>
      <FlatList data={ctx.notes} renderItem={Note} />
    </View>
  );
};

export default NoteList;

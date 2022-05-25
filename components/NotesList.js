import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { Context } from "../ContextProvider";
import Note from "./Note";
import SearchBar from "./SearchBar";
import Ionicons from "@expo/vector-icons/Ionicons";
import styled from "styled-components";

const IconContainer = styled.TouchableOpacity`
  align-items: center;
`;

const NoteList = ({ navigation }) => {
  const ctx = useContext(Context);
  const { notes } = ctx;

  console.log(notes);
  return (
    <View>
      <SearchBar />
      <FlatList data={ctx.notes} renderItem={Note} />
      {notes.length > 2 ? (
        <IconContainer onPress={() => navigation.navigate("Add Note")}>
          <Ionicons name="add-circle" color="#fdbe00" size={60} />
        </IconContainer>
      ) : null}
    </View>
  );
};

export default NoteList;

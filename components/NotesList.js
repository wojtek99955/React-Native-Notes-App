import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { Context } from "../ContextProvider";
import Note from "./Note/Note";
import SearchBar from "./SearchBar/SearchBar";
import Ionicons from "@expo/vector-icons/Ionicons";
import styled from "styled-components";

const IconContainer = styled.TouchableOpacity`
  align-items: center;
`;

const NoteList = ({ navigation }) => {
  const ctx = useContext(Context);
  const { notes } = ctx;

  const FooterComponent = () => {
    if (notes.length > 2) {
      return (
        <IconContainer onPress={() => navigation.navigate("Add Note")}>
          <Ionicons name="add-circle" color="#fdbe00" size={60} />
        </IconContainer>
      );
    } else {
      return null;
    }
  };

  console.log(notes);
  return (
    <View>
      <SearchBar />

      <FlatList
        numColumns={2}
        data={ctx.notes}
        renderItem={Note}
        ListFooterComponent={<FooterComponent />}
      />
    </View>
  );
};

export default NoteList;

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Button,
} from "react-native";
import { useContext } from "react";
import { Context } from "../ContextProvider";
import Note from "./Note/Note";
import SearchBar from "./SearchBar/SearchBar";
import Ionicons from "@expo/vector-icons/Ionicons";
import styled from "styled-components";

export const Container = styled.View`
  background-color: white;
  margin: 5px;
  padding: 22px 10px;
  border-radius: 10px;
  box-shadow: 2px 1px 6px rgba(206, 206, 206, 0.25);
`;
export const DateText = styled.Text`
  font-size: 12px;
  margin-top: 20px;
`;

export const NoteText = styled.Text`
  font-size: 25px;
`;

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

  const Note = ({ item }) => {
    const NoteWidth = Dimensions.get("window").width;
    return (
      <Container style={{ width: (NoteWidth - 20) / 2 }}>
        <NoteText>{item.text}</NoteText>
        <DateText>{item.date}</DateText>
        <Button
          title="details"
          onPress={() => navigation.navigate("Details", item)}
        />
      </Container>
    );
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

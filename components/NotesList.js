import {
  View,
  Text,
  FlatList,
  Dimensions,
  Button,
  Vibration,
} from "react-native";
import { useContext, useState } from "react";
import { Context } from "../ContextProvider";
import SearchBar from "./SearchBar/SearchBar";
import Ionicons from "@expo/vector-icons/Ionicons";
import styled from "styled-components";
import NoteModal from "./NoteModal";

export const Container = styled.Pressable`
  background-color: white;
  margin: 5px;
  padding: 22px 10px;
  border-radius: 10px;
  box-shadow: 2px 1px 6px rgba(206, 206, 206, 0.25);
  position: relative;
`;
export const DateText = styled.Text`
  font-size: 12px;
  margin-top: 20px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding-top: 10px;
`;

export const NoteText = styled.Text`
  font-size: 25px;
  margin-bottom: 22px;
`;

const IconContainer = styled.TouchableOpacity`
  align-items: center;
`;

const ShowMore = styled.Text`
  color: #fdbe00;
  margin-bottom: 20px;
`;

const NoteList = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState("");

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
    const handleOpen = (id) => {
      const elementId = ctx.notes.findIndex((el) => el.id === id);
      const newArray = [...ctx.notes];
      newArray[elementId] = {
        ...newArray[elementId],
        modalOpen: true,
      };
      ctx.setNotes(newArray);
    };
    const handleClose = (id) => {
      const elementId = ctx.notes.findIndex((el) => el.id === id);
      const newArray = [...ctx.notes];
      newArray[elementId] = {
        ...newArray[elementId],
        modalOpen: false,
      };
      ctx.setNotes(newArray);
    };
    return (
      <>
        <NoteModal visible={item.modalOpen} note={item} />
        <Container
          style={{ width: (NoteWidth - 20) / 2 }}
          onPress={() => navigation.navigate("Details", item)}
          onLongPress={() => handleOpen(item.id)}
          onPressOut={() => handleClose(item.id)}
        >
          <NoteText>
            {item.text.length > 50 ? `${item.text.slice(0, 50)}...` : item.text}
          </NoteText>
          {item.text.length > 50 ? <ShowMore>More...</ShowMore> : null}
          <DateText>{item.date}</DateText>
        </Container>
      </>
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

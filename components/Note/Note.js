import { Container, NoteText, DateText } from "./NoteStyles";
import { Dimensions } from "react-native";

const NoteWidth = Dimensions.get("window").width;

const Note = ({ item }) => {
  return (
    <Container style={{ width: (NoteWidth - 20) / 2 }}>
      <NoteText>{item.text}</NoteText>
      <DateText>{item.date}</DateText>
    </Container>
  );
};

export default Note;

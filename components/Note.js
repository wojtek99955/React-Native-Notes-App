import { View, Text, Dimensions } from "react-native";
import styled from "styled-components";
const Container = styled.View`
  background-color: white;
  margin: 5px;
  padding: 22px 10px;
  border-radius: 10px;
  box-shadow: 2px 1px 6px rgba(206, 206, 206, 0.25);
`;
const DateText = styled.Text`
  font-size: 12px;
  margin-top: 20px;
`;

const NoteText = styled.Text`
  font-size: 25px;
`;

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

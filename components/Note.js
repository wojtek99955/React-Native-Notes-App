import { View, Text } from "react-native";
import styled from "styled-components";
const Container = styled.View`
  background-color: white;
  margin: 10px auto;
  width: 80%;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 1px 6px rgba(206, 206, 206, 0.25);
`;

const NoteText = styled.Text`
  font-size: 25px;
`;

const Note = ({ item }) => {
  return (
    <Container>
      <NoteText>{item.text}</NoteText>
    </Container>
  );
};

export default Note;

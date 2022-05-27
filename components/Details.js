import { View, Text } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  background-color: white;
  margin: 30px 10px;
  border-radius: 10px;
  padding: 10px;
`;
const NoteText = styled.Text`
  font-size: 25px;
`;
const Date = styled.Text`
  margin-top: 40px;
`;
const Details = ({ route }) => {
  const item = route.params;
  return (
    <Container>
      <NoteText>{item.text}</NoteText>
      <Date>{item.date}</Date>
    </Container>
  );
};

export default Details;

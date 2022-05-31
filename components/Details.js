import { View, Text } from "react-native";
import styled from "styled-components";
import { Context } from "../ContextProvider";
import { useContext } from "react";

const Container = styled.View`
  background-color: white;
  margin: 30px 10px;
  border-radius: 10px;
  padding: 10px;
`;
const NoteText = styled.Text`
  font-size: ${({ fontSize }) => `${fontSize}px`};
`;
const Date = styled.Text`
  margin-top: 40px;
`;
const Details = ({ route }) => {
  const item = route.params;
  const { fontSize } = useContext(Context);
  return (
    <Container>
      <NoteText fontSize={fontSize.size}>{item.text}</NoteText>
      <Date>{item.date}</Date>
    </Container>
  );
};

export default Details;

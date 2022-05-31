import { View, Text } from "react-native";
import styled from "styled-components";
import { Context } from "../ContextProvider";
import { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
const Wrapper = styled.ScrollView``;
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

const IconContainer = styled.View`
  align-items: flex-end;
  padding: 0 40px;
`;
const Details = ({ route }) => {
  const item = route.params;
  const { fontSize } = useContext(Context);
  return (
    <Wrapper>
      <Container>
        <NoteText fontSize={fontSize.size}>{item.text}</NoteText>
        <Date>{item.date}</Date>
      </Container>
      <IconContainer>
        <Ionicons name="close-circle" size={60} color="red" />
      </IconContainer>
    </Wrapper>
  );
};

export default Details;

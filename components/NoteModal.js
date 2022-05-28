import { View, Text, Modal } from "react-native";
import styled from "styled-components";

const StyledModal = styled.Modal``;
const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;
const TextContainer = styled.View`
  background-color: white;
  padding: 50px;
  width: 70%;
`;

const NoteText = styled.Text`
  font-size: 22px;
`;
const Date = styled.Text`
  margin-top: 20px;
`;
const NoteModal = ({ note, visible }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <Container>
        <TextContainer>
          <NoteText>{note.text}</NoteText>
          <Date>{note.date}</Date>
        </TextContainer>
      </Container>
    </Modal>
  );
};

export default NoteModal;

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
const NoteModal = ({ children, visible }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <Container>
        <TextContainer>
          <NoteText>{children}</NoteText>
        </TextContainer>
      </Container>
    </Modal>
  );
};

export default NoteModal;

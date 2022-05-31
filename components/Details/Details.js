import { Modal } from "react-native";
import { Context } from "../../ContextProvider";
import { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  Wrapper,
  Container,
  NoteText,
  Date,
  BtnContainer,
  ModalContainer,
  ModalBtnContainer,
  ModalBtn,
  ModalBtnText,
  ModalText,
} from "./DetailsStyles";

const Details = ({ route, navigation }) => {
  const item = route.params;
  const { fontSize, notes, setNotes } = useContext(Context);
  const handleDelete = (id) => {
    const newList = notes.filter((note) => note.id !== id);
    setNotes(newList);
    navigation.goBack();
  };
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);

  return (
    <Wrapper>
      <Container>
        <NoteText fontSize={fontSize.size}>{item.text}</NoteText>
        <Date>{item.date}</Date>
      </Container>
      <BtnContainer onPress={openModal}>
        <Ionicons name="close-circle" size={60} color="red" />
      </BtnContainer>
      <Modal transparent={true} visible={modalVisible}>
        <ModalContainer>
          <ModalText>Do you want to delete this note?</ModalText>
          <ModalBtnContainer>
            <ModalBtn
              onPress={() => {
                handleDelete(item.id);
                setModalVisible(false);
              }}
            >
              <ModalBtnText>Yes</ModalBtnText>
            </ModalBtn>
            <ModalBtn
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <ModalBtnText>No</ModalBtnText>
            </ModalBtn>
          </ModalBtnContainer>
        </ModalContainer>
      </Modal>
    </Wrapper>
  );
};

export default Details;

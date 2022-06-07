import { View, Text, Modal } from "react-native";
import { useContext } from "react";
import { Context } from "../../ContextProvider";
import {
  ModalContainer,
  ModalText,
  ModalBtnContainer,
  ModalBtn,
  ModalBtnText,
} from "./DeleteModal/DeleteModalStyles";

const DeleteModal = ({ item, navigation, modalVisible, setModalVisible }) => {
  const { notes, setNotes } = useContext(Context);

  const handleDelete = (id) => {
    const newList = notes.filter((note) => note.id !== id);
    setNotes(newList);
    navigation.goBack();
  };
  return (
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
  );
};

export default DeleteModal;

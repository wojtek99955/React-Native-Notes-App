import { View, Text, Modal } from "react-native";
import { useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../ContextProvider";

export const ModalContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalBtnContainer = styled.View`
  flex-direction: row;
`;
export const ModalBtn = styled.TouchableOpacity`
  background-color: #fdbe00;
  margin: 15px;
  border-radius: 10px;
  width: 110px;
  align-items: center;
  justify-content: center;
  height: 45px;
`;
export const ModalBtnText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 700;
`;
export const ModalText = styled.Text`
  font-size: 40px;
  text-align: center;
  color: white;
  margin-bottom: 60px;
`;

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

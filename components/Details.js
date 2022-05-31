import { View, Text, TouchableOpacity, Modal } from "react-native";
import styled from "styled-components";
import { Context } from "../ContextProvider";
import { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
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

const BtnContainer = styled.TouchableOpacity`
  align-items: flex-end;
  padding: 0 40px;
`;
const ModalContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.8);
`;
const ModalBtnContainer = styled.View`
  flex-direction: row;
`;
const ModalBtn = styled.TouchableOpacity`
  background-color: #fdbe00;
  margin: 15px;
  border-radius: 10px;
  width: 110px;
  align-items: center;
  justify-content: center;
  height: 45px;
`;
const ModalBtnText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 700;
`;
const ModalText = styled.Text`
  font-size: 40px;
  text-align: center;
  color: white;
  margin-bottom: 60px;
`;
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

import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components";
export const ModalContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const Button = styled.TouchableOpacity`
  background-color: #fdbe00;
  margin: 15px;
  border-radius: 10px;
  width: 110px;
  align-items: center;
  justify-content: center;
  height: 45px;
`;

export const ButtonText = styled.Text`
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

const EmptyValueModal = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal transparent={true} visible={modalVisible}>
      <ModalContainer>
        <ModalText>You can't save empty note</ModalText>
        <Button
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <ButtonText>ok</ButtonText>
        </Button>
      </ModalContainer>
    </Modal>
  );
};

export default EmptyValueModal;

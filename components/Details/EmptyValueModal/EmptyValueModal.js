import { View, Text, Modal, Button } from "react-native";
import React from "react";
import styled from "styled-components";
export const ModalContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.8);
`;

const EmptyValueModal = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal transparent={true} visible={modalVisible}>
      <ModalContainer>
        <Button
          title="ok"
          onPress={() => {
            setModalVisible(false);
          }}
        />
      </ModalContainer>
    </Modal>
  );
};

export default EmptyValueModal;

import styled from "styled-components";

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

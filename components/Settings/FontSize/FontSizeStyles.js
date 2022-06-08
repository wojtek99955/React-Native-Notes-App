import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const StyledText = styled.Text`
  font-size: 25px;
  padding: 10px;
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`;
export const BtnsContainer = styled.View`
  padding: 40px 0;
  align-items: center;
`;
export const Button = styled.TouchableOpacity`
  margin-bottom: 20px;
  background-color: #fdbe00;
  width: 130px;
  padding: 10px;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
`;
export const BtnText = styled.Text`
  color: white;
`;
export const DemoText = styled.Text`
  font-size: ${({ fontSize }) => fontSize.size}px;
`;

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => (theme === "dark" ? "black" : "white")};
`;

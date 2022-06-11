import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const Container = styled.View`
  background-color: ${({ theme }) => theme === "dark" && "black"};
  height: 100%;
`;
export const MainText = styled.Text`
  font-size: 25px;
  margin: auto;
  padding: 20px;
  color: ${({ color }) => color};
  background-color: ${({ theme }) => (theme === "dark" ? "grey" : "white")};
  border-radius: 10px;
`;

export const ColorContainer = styled.View`
  flex-direction: row;
  padding: 40px;
`;
export const Color = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ color }) => color};
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  margin: auto;
`;

export const ResetButton = styled.TouchableOpacity`
  background-color: #fdbe00;
  width: 120px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 12px;
  margin-top: 120px;
`;
export const BtnText = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: 600;
`;

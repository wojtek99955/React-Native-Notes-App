import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const Button = styled.TouchableOpacity`
  background-color: green;
  width: 150px;
  align-items: center;
  padding: 15px 10px;
  margin: 20px auto;
  border-radius: 20px;
  background-color: #fdbe00;
`;
export const ButtonText = styled.Text`
  font-size: 40px;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  margin-top: 40px;
`;

export const SectionContainer = styled.View`
  flex: 1;
  padding: 15px;
  background-color: ${({ theme }) => theme === "dark" && "black"};
`;

export const MainText = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`;

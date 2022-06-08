import styled from "styled-components";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export const Container = styled.View``;
export const Input = styled.TextInput`
  width: 100%;
  background-color: white;
  padding: 15px;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  height: 200px;
`;
export const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  margin: 20px 0;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) =>
    theme === "dark" ? "#d5a000" : "#fdbe00"};
  width: 150px;
  height: 60px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 50px;
`;
export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

import styled from "styled-components";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme === "dark" && "black"};
`;
export const Input = styled.TextInput`
  width: 100%;
  background-color: ${({ theme }) => (theme === "dark" ? "#242424" : "white")};
  padding: 15px;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  height: 200px;
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`;
export const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  margin: 20px 0;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ noteText }) =>
    noteText.length > 0 ? "#fdbe00" : "#ffe69b"};
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

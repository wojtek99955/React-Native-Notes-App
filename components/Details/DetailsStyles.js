import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styled from "styled-components";
export const Wrapper = styled.ScrollView``;
export const Container = styled.View`
  background-color: white;
  margin: 30px 10px;
  border-radius: 10px;
  padding: 10px;
`;
export const NoteText = styled.Text`
  font-size: ${({ fontSize }) => `${fontSize}px`};
`;
export const Date = styled.Text`
  margin-top: 40px;
`;

export const BtnContainer = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const BtnsWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10px;
`;

export const StyledInput = styled.TextInput`
  font-size: ${({ fontSize }) => `${fontSize}px`};
`;

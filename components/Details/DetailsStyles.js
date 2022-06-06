import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import styled from "styled-components";
export const Wrapper = styled.ScrollView``;
export const Container = styled.TouchableWithoutFeedback``;
export const ContentContainer = styled.View``;
export const NoteContainer = styled.Pressable`
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
  align-items: center;
`;

export const StyledInput = styled.TextInput`
  font-size: ${({ fontSize }) => `${fontSize}px`};
`;

export const SaveBtn = styled.TouchableOpacity`
  background-color: #fdbe00;
  padding: 10px 20px;
  border-radius: 10px;
`;
export const SaveBtnText = styled.Text``;

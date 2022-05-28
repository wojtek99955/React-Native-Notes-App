import styled from "styled-components";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Button,
  Vibration,
} from "react-native";

export const Container = styled.Pressable`
  background-color: white;
  margin: 5px;
  padding: 22px 10px;
  border-radius: 10px;
  box-shadow: 2px 1px 6px rgba(206, 206, 206, 0.25);
  position: relative;
`;
export const DateText = styled.Text`
  font-size: 12px;
  margin-top: 20px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding-top: 10px;
`;

export const NoteText = styled.Text`
  font-size: 25px;
  margin-bottom: 22px;
`;

export const IconContainer = styled.TouchableOpacity`
  align-items: center;
  margin-top: 30px;
`;

export const ShowMore = styled.Text`
  color: #fdbe00;
  margin-bottom: 20px;
`;

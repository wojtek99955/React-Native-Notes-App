import styled from "styled-components";
import { TouchableOpacity, View, Text } from "react-native";

export const PreferencesLink = styled.TouchableOpacity`
  padding: 10px;
`;
export const LinkText = styled.Text`
  font-size: 25px;
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`;
export const Divider = styled.View`
  width: 100%;
  border-bottom-color: grey;
  border-bottom-width: 1px;
`;
export const Container = styled.View`
  padding: 0 10px;
  background-color: ${({ theme }) => theme === "dark" && "black"};
  flex: 1;
`;

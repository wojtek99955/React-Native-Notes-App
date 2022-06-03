import { View, TextInput } from "react-native";
import styled from "styled-components";

export const Wrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
`;
export const Container = styled.View`
  justify-items: center;
  align-items: center;
  width: 100%;
  background-color: #cecece;
  margin: 20px 10px;
  padding: 10px;
  flex-direction: row;
  border-radius: 10px;
`;
export const Input = styled.TextInput`
  background-color: #cecece;
  height: 40px;
  padding: 10px;
  flex: 1;
`;

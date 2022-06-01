import { View, Text } from "react-native";
import { useContext } from "react";
import { Context } from "../../ContextProvider";
import styled from "styled-components";

const Container = styled.View``;
const MainText = styled.Text`
  font-size: 25px;
  margin: auto;
  padding-top: 20px;
`;

const FontColor = () => {
  const { fontColor, setFontColor } = useContext(Context);
  return (
    <Container>
      <MainText>Current font color: {fontColor}</MainText>
    </Container>
  );
};

export default FontColor;

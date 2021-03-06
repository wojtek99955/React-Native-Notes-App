import { View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { Context } from "../../../ContextProvider";
import styled from "styled-components";
import {
  Container,
  ColorContainer,
  Color,
  StyledTouchableOpacity,
  ResetButton,
  BtnText,
  MainText,
} from "./FontColorStyles";

const colors = [
  { name: "navy", hex: "#173F5F" },
  { name: "blue", hex: "#20639B" },
  { name: "green", hex: "#3CAEA3" },
  { name: "yellow", hex: "#fdbe00" },
  { name: "red", hex: "#ED553B" },
];

const FontColor = () => {
  const { fontColor, setFontColor, theme } = useContext(Context);
  return (
    <Container theme={theme}>
      <MainText color={fontColor.hex} theme={theme}>
        Current font color: {fontColor.name}
      </MainText>
      <ColorContainer>
        {colors.map((color) => {
          return (
            <StyledTouchableOpacity
              activeOpacity={0.5}
              onPress={() => setFontColor({ name: color.name, hex: color.hex })}
              key={color.name}
            >
              <Color color={color.hex}></Color>
            </StyledTouchableOpacity>
          );
        })}
      </ColorContainer>
      <ResetButton
        onPress={() => setFontColor({ name: "black", hex: "#000000" })}
      >
        <BtnText>Reset</BtnText>
      </ResetButton>
    </Container>
  );
};

export default FontColor;

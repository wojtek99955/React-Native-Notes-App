import { View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { Context } from "../../ContextProvider";
import styled from "styled-components";

const Container = styled.View``;
const MainText = styled.Text`
  font-size: 25px;
  margin: auto;
  padding-top: 20px;
  color: ${({ color }) => color};
`;

const ColorContainer = styled.View`
  flex-direction: row;
  padding: 40px;
`;
const Color = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  margin: auto;
`;

const colors = [
  { name: "navy", hex: "#173F5F" },
  { name: "blue", hex: "#20639B" },
  { name: "green", hex: "#3CAEA3" },
  { name: "yellow", hex: "#fdbe00" },
  { name: "red", hex: "#ED553B" },
];

const FontColor = () => {
  const { fontColor, setFontColor } = useContext(Context);
  return (
    <Container>
      <MainText color={fontColor.hex}>
        Current font color: {fontColor.name}
      </MainText>
      <ColorContainer>
        {colors.map((color) => {
          return (
            <StyledTouchableOpacity
              activeOpacity={0.5}
              onPress={() => setFontColor({ name: color.name, hex: color.hex })}
            >
              <Color color={color.hex}></Color>
            </StyledTouchableOpacity>
          );
        })}
      </ColorContainer>
    </Container>
  );
};

export default FontColor;

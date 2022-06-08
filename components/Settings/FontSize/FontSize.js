import { View } from "react-native";
import { useContext } from "react";
import { Context } from "../../../ContextProvider";
import {
  StyledText,
  BtnsContainer,
  BtnText,
  Button,
  DemoText,
  Wrapper,
} from "./FontSizeStyles";

const FontSize = () => {
  const { fontSize, setFontSize, theme } = useContext(Context);
  const sizes = [
    { name: "Small", size: 15 },
    { name: "Medium", size: 22 },
    { name: "Large", size: 30 },
  ];
  return (
    <Wrapper theme={theme}>
      <StyledText theme={theme}>
        Current Size: <DemoText fontSize={fontSize}>{fontSize.name}</DemoText>
      </StyledText>
      <BtnsContainer>
        {sizes.map((size) => {
          return (
            <Button key={size.name} onPress={() => setFontSize(size)}>
              <BtnText style={{ fontSize: size.size }}>{size.name}</BtnText>
            </Button>
          );
        })}
      </BtnsContainer>
    </Wrapper>
  );
};

export default FontSize;

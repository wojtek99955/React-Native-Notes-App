import { View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { Context } from "../../ContextProvider";
import styled from "styled-components";

const StyledText = styled.Text`
  font-size: 25px;
  padding: 10px;
`;
const BtnsContainer = styled.View`
  padding: 40px 0;
  align-items: center;
`;
const Button = styled.TouchableOpacity`
  margin-bottom: 20px;
  background-color: #fdbe00;
  width: 130px;
  padding: 10px;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
`;
const BtnText = styled.Text`
  color: white;
`;
const DemoText = styled.Text`
  font-size: ${({ fontSize }) => fontSize.size}px;
`;
const FontSize = () => {
  const { fontSize, setFontSize } = useContext(Context);
  const sizes = [
    { name: "Small", size: 15 },
    { name: "Medium", size: 22 },
    { name: "Large", size: 30 },
  ];
  return (
    <View>
      <StyledText>
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
    </View>
  );
};

export default FontSize;

import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Context } from "../../ContextProvider";
import { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const Button = styled.TouchableOpacity`
  background-color: green;
  width: 150px;
  align-items: center;
  padding: 15px 10px;
  margin: 20px auto;
  border-radius: 20px;
  background-color: #fdbe00;
`;
const ButtonText = styled.Text`
  font-size: 40px;
  text-align: center;
`;

const ButtonContainer = styled.View`
  margin-top: 40px;
`;

const SectionContainer = styled.View`
  flex: 1;
  padding: 15px;
  background-color: ${({ theme }) => theme === "dark" && "black"};
`;

const MainText = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`;

const FontWeight = () => {
  const { fontWeight, setFontWeight, theme } = useContext(Context);
  const MoreWeight = () => {
    setFontWeight((weight) => weight + 100);
  };
  const LessWeight = () => {
    setFontWeight((weight) => weight - 100);
  };
  return (
    <SectionContainer theme={theme}>
      <MainText fontWeight={fontWeight} theme={theme}>
        Current font weight
      </MainText>
      <ButtonContainer>
        <Button onPress={MoreWeight} disabled={fontWeight > 800}>
          <ButtonText>
            <Ionicons name="add-circle-outline" size={25} color="white" />
          </ButtonText>
        </Button>
        <Button onPress={LessWeight} disabled={fontWeight < 200}>
          <ButtonText>
            <Ionicons name="remove-circle-outline" size={25} color="white" />
          </ButtonText>
        </Button>
      </ButtonContainer>
    </SectionContainer>
  );
};

export default FontWeight;

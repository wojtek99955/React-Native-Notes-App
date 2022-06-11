import { Context } from "../../../ContextProvider";
import { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Button,
  ButtonContainer,
  SectionContainer,
  MainText,
  ButtonText,
} from "./FontWeightStyles";

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
        <Button
          onPress={MoreWeight}
          disabled={fontWeight > 800}
          style={
            fontWeight > 800
              ? { backgroundColor: "#ffe69b" }
              : { backgroundColor: "#fdbe00" }
          }
        >
          <ButtonText>
            <Ionicons name="add-circle-outline" size={25} color="white" />
          </ButtonText>
        </Button>
        <Button
          onPress={LessWeight}
          disabled={fontWeight < 200}
          style={
            fontWeight < 200
              ? { backgroundColor: "#ffe69b" }
              : { backgroundColor: "#fdbe00" }
          }
        >
          <ButtonText>
            <Ionicons name="remove-circle-outline" size={25} color="white" />
          </ButtonText>
        </Button>
      </ButtonContainer>
    </SectionContainer>
  );
};

export default FontWeight;

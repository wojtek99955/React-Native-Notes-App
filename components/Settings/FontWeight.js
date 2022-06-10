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

const FontWeight = () => {
  const { FontWeight, setFontWeight } = useContext(Context);
  return (
    <View>
      <Text>Current font weight</Text>
      <Button>
        <ButtonText>
          <Ionicons name="add-circle-outline" size={25} color="white" />
        </ButtonText>
      </Button>
      <Button>
        <ButtonText>
          <Ionicons name="remove-circle-outline" size={25} color="white" />
        </ButtonText>
      </Button>
    </View>
  );
};

export default FontWeight;

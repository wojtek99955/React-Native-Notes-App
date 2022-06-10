import { View, Text } from "react-native";
import styled from "styled-components";
import { Context } from "../../ContextProvider";
import { useContext } from "react";

const FontWeight = () => {
  const { FontWeight, setFontWeight } = useContext(Context);
  return (
    <View>
      <Text>Current font weight</Text>
    </View>
  );
};

export default FontWeight;

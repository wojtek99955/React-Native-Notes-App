import { View, Text, Button } from "react-native";
import { useContext } from "react";
import { Context } from "../../ContextProvider";

const FontSize = () => {
  const { fontSize, setFontSize } = useContext(Context);
  const sizes = [
    { name: "Medium", size: 25 },
    { name: "Small", size: 15 },
    { name: "Large", size: 30 },
  ];
  return (
    <View>
      <Text>FontSize</Text>
      <Text>Current Size: {fontSize.name} </Text>
      {sizes.map((size) => {
        return <Button title={size.name} onPress={() => setFontSize(size)} />;
      })}
    </View>
  );
};

export default FontSize;

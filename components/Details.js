import { View, Text } from "react-native";
import React from "react";

const Details = ({ navigation, route }) => {
  const item = route.params;
  return (
    <View>
      <Text>{item.text}</Text>
    </View>
  );
};

export default Details;

import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../components/Settings/Settings";
import Preferences from "../Preferences";

const SettingsScreens = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings Main"
        options={{ title: "Settings" }}
        component={Settings}
      />
      <Stack.Screen name="Preferences" component={Preferences} />
    </Stack.Navigator>
  );
};

export default SettingsScreens;

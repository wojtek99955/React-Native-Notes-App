import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../components/Settings/Settings";
import Preferences from "../components/Settings/Preferences";
import PrivacyPolicy from "../components/Settings/PrivacyPolicy";
import DarkMode from "../components/Settings/DarkMode";

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
      <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
      <Stack.Screen name="Dark Mode" component={DarkMode} />
    </Stack.Navigator>
  );
};

export default SettingsScreens;

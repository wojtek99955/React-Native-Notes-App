import { View, Text } from "react-native";
import { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../components/Settings/Settings";
import Preferences from "../components/Settings/Preferences/Preferences";
import PrivacyPolicy from "../components/Settings/PrivacyPolicy";
import DarkMode from "../components/Settings/DarkMode";
import About from "../components/Settings/About";
import FontSize from "../components/Settings/FontSize/FontSize";
import FontColor from "../components/Settings/FontColor/FontColor";
import { Context } from "../ContextProvider";

const SettingsScreens = () => {
  const { theme } = useContext(Context);
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme === "dark" ? "#242424" : "white",
        },
        headerTintColor: theme === "dark" ? "white" : "black",
      }}
    >
      <Stack.Screen
        name="Settings Main"
        options={{ title: "Settings" }}
        component={Settings}
      />
      <Stack.Screen name="Preferences" component={Preferences} />
      <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
      <Stack.Screen name="Dark Mode" component={DarkMode} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Font Size" component={FontSize} />
      <Stack.Screen name="Font Color" component={FontColor} />
    </Stack.Navigator>
  );
};

export default SettingsScreens;

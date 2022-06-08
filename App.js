import { StyleSheet, Platform } from "react-native";
import ContextProvider from "./ContextProvider";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AddNote from "./components/AddNote/AddNote";
import Ionicons from "@expo/vector-icons/Ionicons";
import NoteListScreen from "./screens/NoteListScreen";
import "react-native-gesture-handler";
import SettingsScreens from "./screens/SettingsScreens";
import { useContext, createContext } from "react";
import { Context } from "./ContextProvider";
import { Appearance } from "react-native";
const theme = Appearance.getColorScheme();

export const ThemeContext = createContext();

export default function App() {
  const ctx = useContext(Context);
  const Tabs = createBottomTabNavigator();
  return (
    <ContextProvider>
      <ThemeContext.Provider value={theme}>
        <NavigationContainer>
          <Tabs.Navigator
            screenOptions={{
              tabBarActiveTintColor: "#fdbe00",
              tabBarInactiveTintColor: "gray",
              tabBarHideOnKeyboard: true,
              headerStyle: {
                backgroundColor: theme === "dark" ? "#333333" : "white",
              },
              headerTintColor: theme === "dark" ? "white" : "black",

              tabBarLabelStyle: {
                fontSize: 15,
              },
              tabBarStyle: {
                paddingVertical: 5,
                height: Platform.OS === "ios" ? 85 : 55,
                backgroundColor: theme === "dark" ? "#242424" : "white",
              },
            }}
          >
            <Tabs.Screen
              name="Create Note"
              component={AddNote}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    name={focused ? "add-circle" : "add-circle-outline"}
                    color={focused ? "#fdbe00" : "gray"}
                    size={28}
                  />
                ),
              }}
            />
            <Tabs.Screen
              name="Notes List"
              component={NoteListScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    name={focused ? "document" : "document-outline"}
                    color={focused ? "#fdbe00" : "gray"}
                    size={28}
                  />
                ),
                headerShown: false,
              }}
            />
            <Tabs.Screen
              name="Settings"
              component={SettingsScreens}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    name={focused ? "settings" : "settings-outline"}
                    color={focused ? "#fdbe00" : "gray"}
                    size={28}
                  />
                ),
                headerShown: false,
              }}
            />
          </Tabs.Navigator>
        </NavigationContainer>
      </ThemeContext.Provider>
    </ContextProvider>
  );
}

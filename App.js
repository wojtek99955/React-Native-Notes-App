import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ContextProvider from "./ContextProvider";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
import Ionicons from "@expo/vector-icons/Ionicons";
import Settings from "./components/Settings";

export default function App() {
  const Tabs = createBottomTabNavigator();
  return (
    <ContextProvider>
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#fdbe00",
            tabBarInactiveTintColor: "gray",
            tabBarLabelStyle: {
              fontSize: 15,
            },
          }}
        >
          <Tabs.Screen
            name="Add Note"
            component={AddNote}
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? "add-circle" : "add-circle-outline"}
                  color={focused ? "#fdbe00" : null}
                  size={28}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="Notes List"
            component={NotesList}
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? "document" : "document-outline"}
                  color={focused ? "#fdbe00" : null}
                  size={28}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? "settings" : "settings-outline"}
                  color={focused ? "#fdbe00" : null}
                  size={28}
                />
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

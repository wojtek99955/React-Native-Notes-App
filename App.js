import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ContextProvider from "./ContextProvider";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  const Tabs = createBottomTabNavigator();
  return (
    <ContextProvider>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen
            name="Add Note"
            component={AddNote}
            options={{
              tabBarIcon: () => (
                <Ionicons name="add-circle-outline" size={25} />
              ),
            }}
          />
          <Tabs.Screen
            name="Notes List"
            component={NotesList}
            options={{
              tabBarIcon: () => (
                <Ionicons name="reorder-four-outline" size={25} />
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

import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import NotesList from "../components/NotesList/NotesList";
import Details from "../components/Details/Details/Details";
import { Context } from "../ContextProvider";
import { useContext } from "react";

const Stack = createStackNavigator();
const NoteListScreen = () => {
  const { theme } = useContext(Context);
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
        name="List"
        options={{ title: "Notes List" }}
        component={NotesList}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default NoteListScreen;

import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import NotesList from "../components/NotesList/NotesList";
import Details from "../components/Details";

const Stack = createStackNavigator();
const NoteListScreen = () => {
  return (
    <Stack.Navigator>
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

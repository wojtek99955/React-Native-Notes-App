import { View, Text } from "react-native";
import {
  PreferencesLink,
  LinkText,
  Divider,
  Container,
} from "./PreferencesStyles";

const links = ["Dark Mode", "Font Size", "Font Color"];
const Preferences = ({ navigation }) => {
  return (
    <Container>
      {links.map((link) => {
        return (
          <View key={link}>
            <PreferencesLink
              key={link}
              onPress={() => navigation.navigate(link)}
            >
              <LinkText>{link}</LinkText>
            </PreferencesLink>
            <Divider></Divider>
          </View>
        );
      })}
    </Container>
  );
};

export default Preferences;

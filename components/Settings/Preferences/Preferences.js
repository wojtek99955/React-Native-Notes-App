import { View, Text } from "react-native";
import {
  PreferencesLink,
  LinkText,
  Divider,
  Container,
} from "./PreferencesStyles";
import { useContext } from "react";
import { Context } from "../../../ContextProvider";

const links = ["Font Size", "Font Color", "Font Weight"];
const Preferences = ({ navigation }) => {
  const { theme } = useContext(Context);
  return (
    <Container theme={theme}>
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

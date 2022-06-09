import { View } from "react-native";
import styled from "styled-components";
import { Context } from "../../../ContextProvider";
import { useContext } from "react";
import {
  Container,
  PreferencesLink,
  LinkText,
  Divider,
} from "./SettingsStyles";
const Settings = ({ navigation }) => {
  const links = ["Preferences", "Privacy Policy", "About"];
  const { theme } = useContext(Context);
  return (
    <Container theme={theme}>
      {links.map((link) => {
        return (
          <View key={link}>
            <PreferencesLink onPress={() => navigation.navigate(link)}>
              <LinkText theme={theme}>{link}</LinkText>
            </PreferencesLink>
            <Divider></Divider>
          </View>
        );
      })}
    </Container>
  );
};

export default Settings;

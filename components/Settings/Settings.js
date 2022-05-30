import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
const PreferencesLink = styled.TouchableOpacity``;
const LinkText = styled.Text``;
const Settings = ({ navigation }) => {
  return (
    <>
      <PreferencesLink onPress={() => navigation.navigate("Preferences")}>
        <LinkText>Preferences</LinkText>
      </PreferencesLink>
      <PreferencesLink onPress={() => navigation.navigate("Privacy Policy")}>
        <LinkText>Privacy Policy</LinkText>
      </PreferencesLink>
    </>
  );
};

export default Settings;

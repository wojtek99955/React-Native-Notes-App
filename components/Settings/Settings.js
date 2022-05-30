import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
const PreferencesLink = styled.TouchableOpacity``;
const LinkText = styled.Text`
  font-size: 25px;
`;
const Settings = ({ navigation }) => {
  const links = ["Preferences", "Privacy Policy", "About"];
  return (
    <>
      {links.map((link) => {
        return (
          <PreferencesLink key={link} onPress={() => navigation.navigate(link)}>
            <LinkText>{link}</LinkText>
          </PreferencesLink>
        );
      })}
    </>
  );
};

export default Settings;

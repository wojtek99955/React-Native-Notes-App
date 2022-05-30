import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
const PreferencesLink = styled.TouchableOpacity`
  padding: 10px;
`;
const LinkText = styled.Text`
  font-size: 25px;
`;
const Divider = styled.View`
  width: 100%;
  border-bottom-color: grey;
  border-bottom-width: 1px;
`;
const Settings = ({ navigation }) => {
  const links = ["Preferences", "Privacy Policy", "About"];
  return (
    <>
      {links.map((link) => {
        return (
          <>
            <PreferencesLink
              key={link}
              onPress={() => navigation.navigate(link)}
            >
              <LinkText>{link}</LinkText>
            </PreferencesLink>
            <Divider></Divider>
          </>
        );
      })}
    </>
  );
};

export default Settings;

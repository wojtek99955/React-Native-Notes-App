import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Context } from "../../ContextProvider";
import { useContext } from "react";
const PreferencesLink = styled.TouchableOpacity`
  padding: 10px;
`;
const LinkText = styled.Text`
  font-size: 25px;
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`;
const Divider = styled.View`
  width: 100%;
  border-bottom-color: grey;
  border-bottom-width: 1px;
`;
const Container = styled.View`
  padding: 0 10px;
  background-color: ${({ theme }) => (theme === "dark" ? "black" : "white")};
  flex: 1;
`;
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

import { View, Text } from "react-native";
import React from "react";
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
const Container = styled.View`
  padding: 10px;
`;
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

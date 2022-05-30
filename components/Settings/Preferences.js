import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
const PreferencesLink = styled.TouchableOpacity``;
const LinkText = styled.Text``;

const Preferences = ({ navigation }) => {
  return (
    <View>
      <PreferencesLink onPress={() => navigation.navigate("Dark Mode")}>
        <LinkText>Dark Mode</LinkText>
      </PreferencesLink>
      <PreferencesLink onPress={() => navigation.navigate("Font Size")}>
        <LinkText>Font Size</LinkText>
      </PreferencesLink>
    </View>
  );
};

export default Preferences;

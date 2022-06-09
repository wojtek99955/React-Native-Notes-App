import { View, Text } from "react-native";
import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../../ContextProvider";

const Container = styled.ScrollView`
  padding: 15px;
  flex: 1;
  background-color: ${({ theme }) => theme === "dark" && "black"};
`;
const StyledText = styled.Text`
  font-size: 18px;
  margin: 50px 0;
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`;
const Title = styled.Text`
  font-size: 25px;
  text-align: center;
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`;
const PrivacyPolicy = () => {
  const { theme } = useContext(Context);
  return (
    <Container theme={theme}>
      <Title theme={theme}>PrivacyPolicy</Title>
      <StyledText theme={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi neque
        iste doloremque repellendus qui alias voluptatibus inventore ex quam,
        aliquam explicabo doloribus earum impedit, voluptate dolor amet rerum
        laudantium voluptas odio voluptates soluta, voluptatum ipsam dolorum?
        Aperiam, doloribus? Cum soluta eos laudantium, quibusdam minus
        temporibus assumenda quia voluptate suscipit animi.
      </StyledText>
      <StyledText theme={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi neque
        iste doloremque repellendus qui alias voluptatibus inventore ex quam,
        aliquam explicabo doloribus earum impedit, voluptate dolor amet rerum
        laudantium voluptas odio voluptates soluta, voluptatum ipsam dolorum?
        Aperiam, doloribus? Cum soluta eos laudantium, quibusdam minus
        temporibus assumenda quia voluptate suscipit animi.
      </StyledText>
      <StyledText theme={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi neque
        iste doloremque repellendus qui alias voluptatibus inventore ex quam,
        aliquam explicabo doloribus earum impedit, voluptate dolor amet rerum
        laudantium voluptas odio voluptates soluta, voluptatum ipsam dolorum?
        Aperiam, doloribus? Cum soluta eos laudantium, quibusdam minus
        temporibus assumenda quia voluptate suscipit animi.
      </StyledText>
    </Container>
  );
};

export default PrivacyPolicy;

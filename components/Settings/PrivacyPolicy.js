import { View, Text } from "react-native";
import styled from "styled-components";

const Container = styled.ScrollView`
  padding: 15px;
`;
const StyledText = styled.Text`
  font-size: 18px;
  margin: 50px 0;
`;
const Title = styled.Text`
  font-size: 25px;
  text-align: center;
`;
const PrivacyPolicy = () => {
  return (
    <Container>
      <Title>PrivacyPolicy</Title>
      <StyledText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi neque
        iste doloremque repellendus qui alias voluptatibus inventore ex quam,
        aliquam explicabo doloribus earum impedit, voluptate dolor amet rerum
        laudantium voluptas odio voluptates soluta, voluptatum ipsam dolorum?
        Aperiam, doloribus? Cum soluta eos laudantium, quibusdam minus
        temporibus assumenda quia voluptate suscipit animi.
      </StyledText>
      <StyledText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi neque
        iste doloremque repellendus qui alias voluptatibus inventore ex quam,
        aliquam explicabo doloribus earum impedit, voluptate dolor amet rerum
        laudantium voluptas odio voluptates soluta, voluptatum ipsam dolorum?
        Aperiam, doloribus? Cum soluta eos laudantium, quibusdam minus
        temporibus assumenda quia voluptate suscipit animi.
      </StyledText>
      <StyledText>
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

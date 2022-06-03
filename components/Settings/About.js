import { View, Text } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  padding: 10px;
`;
const StyledText = styled.Text`
  font-size: 18px;
  margin-top: 20px;
`;

const About = () => {
  return (
    <Container>
      <StyledText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta
        nostrum voluptates cupiditate tempora facilis assumenda quam nihil,
        delectus placeat! Numquam quibusdam culpa quas ipsum, veritatis ut
        quisquam assumenda maiores!
      </StyledText>
    </Container>
  );
};

export default About;

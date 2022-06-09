import { View, Text } from "react-native";
import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../../ContextProvider";

const Container = styled.View`
  padding: 10px;
  background-color: ${({ theme }) => theme === "dark" && "black"};
  flex: 1;
`;
const StyledText = styled.Text`
  font-size: 18px;
  margin-top: 20px;
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`;

const About = () => {
  const { theme } = useContext(Context);

  return (
    <Container theme={theme}>
      <StyledText theme={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta
        nostrum voluptates cupiditate tempora facilis assumenda quam nihil,
        delectus placeat! Numquam quibusdam culpa quas ipsum, veritatis ut
        quisquam assumenda maiores!
      </StyledText>
    </Container>
  );
};

export default About;

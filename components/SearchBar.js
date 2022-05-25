import { View, TextInput } from "react-native";
import styled from "styled-components";

const Container = styled.View``;
const Input = styled.TextInput`
  background-color: #cecece;
  height: 50px;
  border-radius: 5px;
  width: 80%;
  margin: 20px auto;
  padding: 10px;
`;

const SearchBar = () => {
  return (
    <Container>
      <Input placeholder="Search notes" />
    </Container>
  );
};

export default SearchBar;

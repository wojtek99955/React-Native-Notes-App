import { View, TextInput } from "react-native";
import styled from "styled-components";
import Ionicons from "@expo/vector-icons/Ionicons";
const Wrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
`;
const Container = styled.View`
  justify-items: center;
  align-items: center;
  width: 100%;
  background-color: #cecece;
  margin: 20px 10px;
  padding: 10px;
  flex-direction: row;
  border-radius: 10px;
`;
const Input = styled.TextInput`
  background-color: #cecece;
  height: 40px;
  padding: 10px;
`;

const SearchBar = () => {
  return (
    <Wrapper>
      <Container>
        <Ionicons name="search-outline" size={20} />
        <Input placeholder="Search notes" />
      </Container>
    </Wrapper>
  );
};

export default SearchBar;

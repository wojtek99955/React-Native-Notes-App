import { View, TextInput } from "react-native";
import styled from "styled-components";
import Ionicons from "@expo/vector-icons/Ionicons";
const Wrapper = styled.View``;
const Container = styled.View`
  justify-items: center;
  align-items: center;
  width: 80%;
  background-color: #cecece;
  margin: 20px auto;
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
    <Container>
      <Ionicons name="search-outline" size={20} />
      <Input placeholder="Search notes" />
    </Container>
  );
};

export default SearchBar;

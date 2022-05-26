import Ionicons from "@expo/vector-icons/Ionicons";
import { Wrapper, Container, Input } from "./SearchBarStyles";

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

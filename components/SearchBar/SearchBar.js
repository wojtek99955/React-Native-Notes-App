import Ionicons from "@expo/vector-icons/Ionicons";
import { Wrapper, Container, Input } from "./SearchBarStyles";
import { Context } from "../../ContextProvider";
import { useContext } from "react";

const SearchBar = () => {
  const { setSearchNote } = useContext(Context);

  return (
    <Wrapper>
      <Container>
        <Ionicons name="search-outline" size={20} />
        <Input placeholder="Search notes" onChangeText={setSearchNote} />
      </Container>
    </Wrapper>
  );
};

export default SearchBar;

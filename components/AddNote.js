import styled from "styled-components";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const Container = styled.View``;
const Input = styled.TextInput`
  height: 150px;
  width: 100%;
  background-color: white;
  padding: 15px;
  margin: auto;
  font-size: 25px;
`;
const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  margin: 20px 0;
`;

const Button = styled.TouchableOpacity`
  background-color: #fdbe00;
  width: 150px;
  height: 60px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 50px;
`;
const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

function AddNote() {
  return (
    <Container>
      <Title>Create Your Note!</Title>
      <Input placeholder="add note" multiline={true} numberOfLines={8} />
      <Button>
        <ButtonText>Add Note</ButtonText>
      </Button>
    </Container>
  );
}

export default AddNote;

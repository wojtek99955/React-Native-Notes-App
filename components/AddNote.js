import styled from "styled-components";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { useState, useContext } from "react";
import uuid from "react-native-uuid";
import { Context } from "../ContextProvider";

const Container = styled.View``;
const Input = styled.TextInput`
  width: 100%;
  background-color: white;
  padding: 15px;
  font-size: 25px;
  height: 200px;
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

const Item = styled.Text`
  font-size: 30px;
  color: "gren";
`;

const data = [
  {
    text: "efff",
    id: 11,
  },
  {
    text: "to jaa",
    id: 22,
  },
];

function AddNote() {
  const ctx = useContext(Context);
  const [noteText, setNoteText] = useState("");
  const handleSaveNote = () => {
    ctx.setNotes([{ text: noteText, id: uuid.v4() }, ...ctx.notes]);
    console.log(ctx.notes);
  };

  return (
    <Container>
      <Title>Create Your Note!</Title>
      <Input
        placeholder="add note"
        multiline={true}
        numberOfLines={8}
        textAlignVertical="top"
        onChangeText={(text) => setNoteText(text)}
      />
      <Button onPress={handleSaveNote}>
        <ButtonText>Add Note</ButtonText>
      </Button>
    </Container>
  );
}

export default AddNote;

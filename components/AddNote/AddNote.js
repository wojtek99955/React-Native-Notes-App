import { Keyboard, TouchableWithoutFeedback, Alert } from "react-native";
import { useState, useContext, useRef } from "react";
import uuid from "react-native-uuid";
import { Context } from "../../ContextProvider";
import { Container, Input, Title, Button, ButtonText } from "./AddNoteStyles";

function AddNote() {
  const ctx = useContext(Context);
  const [noteText, setNoteText] = useState("");
  const inputRef = useRef(null);
  const date = new Date();
  const handleSaveNote = () => {
    if (noteText.length > 0) {
      ctx.setNotes([
        {
          text: noteText,
          id: uuid.v4(),
          date: date.toLocaleDateString(),
          modalOpen: false,
        },
        ...ctx.notes,
      ]);
    } else {
      return Alert.alert("Oops!", "You can't add empty note :(", [
        { text: "I got it" },
      ]);
    }
    inputRef.current.clear();
    setNoteText("");
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container theme={ctx.theme}>
        <Title>Create Your Note!</Title>
        <Input
          placeholder="add note"
          multiline={true}
          numberOfLines={8}
          textAlignVertical="top"
          onChangeText={(text) => setNoteText(text)}
          ref={inputRef}
          fontSize={ctx.fontSize.size}
          theme={ctx.theme}
          placeholderTextColor={ctx.theme === "dark" ? "white" : "black"}
        />
        <Button onPress={handleSaveNote} theme={ctx.theme}>
          <ButtonText>Add Note</ButtonText>
        </Button>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default AddNote;

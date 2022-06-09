import {
  View,
  FlatList,
  Dimensions,
  Vibration,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useContext } from "react";
import { Context } from "../../ContextProvider";
import SearchBar from "../SearchBar/SearchBar";
import NoteModal from "../NoteModal";
import {
  Container,
  DateText,
  NoteText,
  ShowMore,
  Wrapper,
} from "./NotesListStyle";
import NoteListFooter from "./NoteListFooter";

const NoteList = ({ navigation }) => {
  const ctx = useContext(Context);
  const { notes, fontColor, theme } = ctx;
  const filteredNotes = notes.filter((note) => {
    return note.text.toLowerCase().includes(ctx.searchNote.toLowerCase());
  });

  const Note = ({ item }) => {
    const NoteWidth = Dimensions.get("window").width;
    const handleOpen = (id) => {
      const elementId = ctx.notes.findIndex((el) => el.id === id);
      const newArray = [...ctx.notes];
      newArray[elementId] = {
        ...newArray[elementId],
        modalOpen: true,
      };
      ctx.setNotes(newArray);
    };
    const handleClose = (id) => {
      const elementId = ctx.notes.findIndex((el) => el.id === id);
      const newArray = [...ctx.notes];
      newArray[elementId] = {
        ...newArray[elementId],
        modalOpen: false,
      };
      ctx.setNotes(newArray);
    };
    return (
      <>
        <NoteModal visible={item.modalOpen} note={item} />
        <Container
          style={{ width: (NoteWidth - 20) / 2 }}
          onPress={() => navigation.navigate("Details", item)}
          onLongPress={() => {
            handleOpen(item.id);
            Vibration.vibrate(50);
          }}
          onPressOut={() => handleClose(item.id)}
        >
          <NoteText fontColor={fontColor.hex} fontSize={ctx.fontSize.size}>
            {item.text.length > 50 ? `${item.text.slice(0, 50)}...` : item.text}
          </NoteText>
          {item.text.length > 50 ? <ShowMore>More...</ShowMore> : null}
          <DateText>{item.date}</DateText>
        </Container>
      </>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Wrapper theme={theme}>
        <SearchBar />

        <FlatList
          numColumns={2}
          data={filteredNotes}
          renderItem={Note}
          ListFooterComponent={<NoteListFooter navigation={navigation} />}
        />
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default NoteList;

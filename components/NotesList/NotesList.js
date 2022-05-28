import { View, FlatList, Dimensions, Vibration } from "react-native";
import { useContext } from "react";
import { Context } from "../../ContextProvider";
import SearchBar from "../SearchBar/SearchBar";
import NoteModal from "../NoteModal";
import { Container, DateText, NoteText, ShowMore } from "./NotesListStyle";
import NoteListFooter from "./NoteListFooter";

const NoteList = ({ navigation }) => {
  const ctx = useContext(Context);
  const { notes } = ctx;

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
          <NoteText>
            {item.text.length > 50 ? `${item.text.slice(0, 50)}...` : item.text}
          </NoteText>
          {item.text.length > 50 ? <ShowMore>More...</ShowMore> : null}
          <DateText>{item.date}</DateText>
        </Container>
      </>
    );
  };

  console.log(notes);
  return (
    <View>
      <SearchBar />

      <FlatList
        numColumns={2}
        data={ctx.notes}
        renderItem={Note}
        ListFooterComponent={<NoteListFooter navigation={navigation} />}
      />
    </View>
  );
};

export default NoteList;

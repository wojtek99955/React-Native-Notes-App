import { Context } from "../../ContextProvider";
import { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { TextInput, Pressable } from "react-native";
import {
  Wrapper,
  Container,
  NoteText,
  Date,
  BtnContainer,
  BtnsWrapper,
} from "./DetailsStyles";

const Details = ({ route, navigation }) => {
  const item = route.params;
  const { fontSize } = useContext(Context);
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const { notes, setNotes } = useContext(Context);
  const [edit, setEdit] = useState(false);
  const openEdit = () => {
    setEdit(true);
  };

  return (
    <Wrapper>
      <Container>
        {edit ? (
          <>
            <TextInput defaultValue={item.text} />
            <Date>{item.date}</Date>
          </>
        ) : (
          <>
            <NoteText fontSize={fontSize.size}>{item.text}</NoteText>
            <Date>{item.date}</Date>
          </>
        )}
      </Container>
      <Date>{edit + "cos"}</Date>
      <Date>{item.openEdditing.toString()}</Date>
      <BtnsWrapper>
        <BtnContainer onPress={openModal}>
          <Ionicons name="close-circle" size={50} color="red" />
        </BtnContainer>
        <BtnContainer
          onPress={() => {
            openEdit();
          }}
        >
          <Ionicons name="create-outline" size={50} color="grey" />
        </BtnContainer>
      </BtnsWrapper>
      <DeleteModal
        item={item}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
      />
    </Wrapper>
  );
};

export default Details;

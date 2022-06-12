import { Context } from "../../../ContextProvider";
import { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import EmptyValueModal from "../EmptyValueModal/EmptyValueModal";
import { Keyboard } from "react-native";
import {
  Wrapper,
  NoteContainer,
  NoteText,
  Date,
  BtnContainer,
  BtnsWrapper,
  StyledInput,
  SaveBtn,
  SaveBtnText,
  Container,
  ContentContainer,
} from "./DetailsStyles";

const Details = ({ route, navigation }) => {
  const item = route.params;
  const { fontSize, fontColor, theme, fontWeight } = useContext(Context);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const openDeleteModal = () => setDeleteModalVisible(true);
  const [emptyValueModalVisible, setEmptyValueModalVisible] = useState(false);
  const openEmptyValueModal = () => {
    if (editedValue.length === 0) {
      setEmptyValueModalVisible(true);
    }
  };

  const { notes, setNotes } = useContext(Context);
  const [editedValue, setEditedValue] = useState("");
  const [edit, setEdit] = useState(false);
  const openEdit = () => {
    setEdit((prev) => !prev);
  };
  console.log(emptyValueModalVisible);

  const handleSave = (id) => {
    const elementId = notes.findIndex((el) => el.id === id);
    const newArray = [...notes];
    newArray[elementId] = {
      ...newArray[elementId],
      text: editedValue,
    };
    navigation.setParams({
      text: editedValue,
    });

    if (editedValue.length > 0) {
      setEdit(false);
      setNotes(newArray);
    } else {
      openEmptyValueModal();
    }

    Keyboard.dismiss();
  };

  return (
    <Wrapper theme={theme}>
      <Container
        onPress={() => {
          setEdit(false);
          Keyboard.dismiss();
        }}
      >
        <ContentContainer>
          <NoteContainer onPress={() => setEdit(true)} theme={theme}>
            {edit ? (
              <>
                <StyledInput
                  defaultValue={item.text}
                  fontSize={fontSize.size}
                  onChangeText={setEditedValue}
                  multiline
                  autoFocus={true}
                  fontColor={fontColor.hex}
                  fontWeight={fontWeight}
                />
                <Date>{item.date}</Date>
              </>
            ) : (
              <>
                <NoteText
                  fontSize={fontSize.size}
                  fontColor={fontColor.hex}
                  fontWeight={fontWeight}
                >
                  {item.text}
                </NoteText>
                <Date>{item.date}</Date>
              </>
            )}
          </NoteContainer>
          <BtnsWrapper>
            {edit && (
              <SaveBtn
                onPress={() => {
                  handleSave(item.id);
                }}
              >
                <SaveBtnText>Save</SaveBtnText>
              </SaveBtn>
            )}
            <BtnContainer onPress={openDeleteModal}>
              <Ionicons name="close-circle" size={50} color="red" />
            </BtnContainer>
            <BtnContainer onPress={openEdit}>
              <Ionicons name="create-outline" size={50} color="grey" />
            </BtnContainer>
          </BtnsWrapper>
          <DeleteModal
            item={item}
            modalVisible={deleteModalVisible}
            setModalVisible={setDeleteModalVisible}
            navigation={navigation}
          />
          <EmptyValueModal
            modalVisible={emptyValueModalVisible}
            setModalVisible={setEmptyValueModalVisible}
          />
        </ContentContainer>
      </Container>
    </Wrapper>
  );
};

export default Details;

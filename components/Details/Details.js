import { Context } from "../../ContextProvider";
import { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
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
  const { fontSize } = useContext(Context);
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const { notes, setNotes } = useContext(Context);
  const [editedValue, setEditedValue] = useState("");
  const [edit, setEdit] = useState(false);
  const openEdit = () => {
    setEdit((prev) => !prev);
  };
  console.log(editedValue);
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
    setEdit(false);
    setNotes(newArray);
  };

  return (
    <Wrapper>
      <Container onPress={() => setEdit(false)}>
        <ContentContainer>
          <NoteContainer onPress={() => setEdit(true)}>
            {edit ? (
              <>
                <StyledInput
                  defaultValue={item.text}
                  fontSize={fontSize.size}
                  onChangeText={setEditedValue}
                  multiline
                />
                <Date>{item.date}</Date>
              </>
            ) : (
              <>
                <NoteText fontSize={fontSize.size}>{item.text}</NoteText>
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
            <BtnContainer onPress={openModal}>
              <Ionicons name="close-circle" size={50} color="red" />
            </BtnContainer>
            <BtnContainer onPress={openEdit}>
              <Ionicons name="create-outline" size={50} color="grey" />
            </BtnContainer>
          </BtnsWrapper>
          <DeleteModal
            item={item}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            navigation={navigation}
          />
        </ContentContainer>
      </Container>
    </Wrapper>
  );
};

export default Details;

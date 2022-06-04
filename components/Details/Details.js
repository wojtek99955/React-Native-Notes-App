import { Context } from "../../ContextProvider";
import { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
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

  return (
    <Wrapper>
      <Container>
        <NoteText fontSize={fontSize.size}>{item.text}</NoteText>
        <Date>{item.date}</Date>
      </Container>
      <BtnsWrapper>
        <BtnContainer onPress={openModal}>
          <Ionicons name="close-circle" size={50} color="red" />
        </BtnContainer>
        <BtnContainer>
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

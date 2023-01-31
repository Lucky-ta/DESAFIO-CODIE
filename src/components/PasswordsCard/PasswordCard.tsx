import * as StyledPassCard from "./index";
import * as StyledButtons from "../Buttons/index";
import { TiSpanner } from "react-icons/ti";
import { BiTrash } from "react-icons/bi";
import { DataShape } from "../../interfaces/interfaces";
import {
  deletePasswordFromFile,
  updatePasswordService,
} from "../../utils/fileSystemFunctions";
import MyContext from "../../context/MyContext";
import { useContext, useState } from "react";
import ModalComponent from "../Modal/Modal";
import { validateForm } from "../../yupFormValidation/yupValidation";
import { updatePasswordById } from "../../services/api/passwordsApi";

interface PasswordCardPropsShape {
  cardData: DataShape;
  index: number;
}

export default function PasswordCard({
  cardData,
  index,
}: PasswordCardPropsShape) {
  const { setShouldRequestPasswords, shouldRequestPasswords } =
    useContext(MyContext);

  const [formError, setFormError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const redirectToUrl = () => {
    window.open(cardData.url, "_blank");
  };

  const openModal = () => {
    console.log("vamos editar o card");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteCard = async () => {
    const result = await deletePasswordFromFile(cardData.file, cardData.id);
    console.log(result);
    setShouldRequestPasswords(!shouldRequestPasswords);
  };

  const handleEditPassword = async (formData: DataShape) => {
    const validationResult = await validateForm(formData);
    if (validationResult.message) {
      return setFormError(validationResult.message);
    } else {
      const updatedUser = await updatePasswordById(cardData.id, formData);
      await updatePasswordService(cardData.file, updatedUser);
      setIsModalOpen(false);
      return setShouldRequestPasswords(!shouldRequestPasswords);
    }
  };

  return (
    <StyledPassCard.PassCardContainer>
      <StyledPassCard.PassCardContentContainer className="headerButton">
        <StyledButtons.PasswordCardButton onClick={redirectToUrl} type="button">
          Iniciar
        </StyledButtons.PasswordCardButton>
      </StyledPassCard.PassCardContentContainer>

      <StyledPassCard.PassCardContentContainer className="content">
        <StyledPassCard.PassCardContentContainer className="infoContainer">
          <StyledPassCard.PassCardContent className="name">
            {cardData.name}
          </StyledPassCard.PassCardContent>
          <StyledPassCard.PassCardContent className="email">
            {cardData.email}
          </StyledPassCard.PassCardContent>
        </StyledPassCard.PassCardContentContainer>

        <StyledPassCard.PassCardContentContainer className="buttons">
          <StyledButtons.PassCardActionsButton
            onClick={openModal}
            type="button"
          >
            {<TiSpanner />}
          </StyledButtons.PassCardActionsButton>
          <StyledButtons.PassCardActionsButton
            onClick={handleDeleteCard}
            type="button"
          >
            {<BiTrash />}
          </StyledButtons.PassCardActionsButton>
        </StyledPassCard.PassCardContentContainer>
      </StyledPassCard.PassCardContentContainer>
      <ModalComponent
        errorMessage={formError}
        initialValue={cardData}
        onClose={closeModal}
        isOpen={isModalOpen}
        onSubmit={handleEditPassword}
      />
    </StyledPassCard.PassCardContainer>
  );
}

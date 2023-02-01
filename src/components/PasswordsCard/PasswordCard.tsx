import { validateForm } from "../../yupFormValidation/yupValidation";
import PasswordManager from "../../utils/fileSystemFunctions";
import { DataShape } from "../../interfaces/interfaces";
import * as StyledButtons from "../Buttons/index";
import MyContext from "../../context/MyContext";
import { useContext, useState } from "react";
import ModalComponent from "../Modal/Modal";
import { TiSpanner } from "react-icons/ti";
import * as StyledPassCard from "./index";
import { BiTrash } from "react-icons/bi";
import useFetch from "../../hooks/swrHook";
import { deleteMutate, updateMutate } from "../../utils/mutateFunctions/mutate";

interface PasswordCardPropsShape {
  password: DataShape;
  index: number;
}

export default function PasswordCard({ password }: PasswordCardPropsShape) {
  const { data, mutate } = useFetch();
  const { setReloadPageTrigger, reloadPageTrigger } = useContext(MyContext);

  const [formError, setFormError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const redirectToUrl = () => {
    window.open(password.url, "_blank");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteCard = async () => {
    deleteMutate(data, password, mutate);
    await PasswordManager.deleteUserPassword(password);
    return setReloadPageTrigger(!reloadPageTrigger);
  };

  const handleEditPassword = async (formData: DataShape) => {
    const validationResult = await validateForm(formData);
    if (!validationResult) {
      setFormError("Validation failed. Please check the form data.");
      return;
    }

    updateMutate(data, formData, mutate);
    await PasswordManager.updateUserPassword(password, formData);
    setIsModalOpen(false);
    setReloadPageTrigger(!reloadPageTrigger);
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
            {password.name}
          </StyledPassCard.PassCardContent>
          <StyledPassCard.PassCardContent className="email">
            {password.email}
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
        initialValue={password}
        onClose={closeModal}
        isOpen={isModalOpen}
        onSubmit={handleEditPassword}
      />
    </StyledPassCard.PassCardContainer>
  );
}

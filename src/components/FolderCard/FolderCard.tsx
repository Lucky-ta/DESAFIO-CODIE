import { useContext, useState } from "react";

import { TiSpanner } from "react-icons/ti";
import { BiTrash } from "react-icons/bi";

import MyContext from "../../context/MyContext";

import useFetch from "../../hooks/swrHook";

import { deleteMutate, updateMutate } from "../../utils/mutateFunctions/mutate";
import { validateForm } from "../../utils/yupFormValidation/yupValidation";
import PasswordManager from "../../utils/fileSystemFunctions";

import { ModalComponent } from "components/Modal";
import { Button } from "components/Buttons";

import { DataShape } from "../../interfaces/interfaces";
import { IPasswordCard } from "./interface";

import * as S from "./styles";

export function FolderCard({ password }: IPasswordCard) {
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
    <S.FolderCard>
      <div className="card-header">
        <Button onClick={redirectToUrl} type="button" text="Iniciar" />
      </div>

      <div className="card-content">
        <div>
          <h3 className="name">{password.name}</h3>
          <h3 className="email">{password.email}</h3>
        </div>

        <div className="card-buttons">
          <Button onClick={openModal} type="button" text={<TiSpanner />} />
          <Button onClick={handleDeleteCard} type="button" text={<BiTrash />} />
        </div>
      </div>
      <ModalComponent
        errorMessage={formError}
        initialValue={password}
        onClose={closeModal}
        isOpen={isModalOpen}
        onSubmit={handleEditPassword}
      />
    </S.FolderCard>
  );
}

import { useContext, useState } from "react";

import { IoMdAdd } from "react-icons/io";

import MyContext from "context/MyContext";

import useFetch from "hooks/swrHook";

import { FileSystem } from "components/Pages/Home/FileSystem";
import { LeftModal } from "components/Pages/Home/LeftModal";
import { Header } from "components/Pages/Home/Header";
import { ModalComponent } from "components/Modal";
import { Button } from "components/Buttons";

import { validateForm } from "utils/yupFormValidation/yupValidation";
import { createMutate } from "utils/mutateFunctions/mutate";
import PasswordManager from "utils/fileSystemFunctions";

import { DataShape } from "interfaces/interfaces";

import { customHomeButton } from "styles/custom/home/buttons";
import * as S from "styles/home";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formError, setFormError] = useState("");

  const { data, mutate } = useFetch();
  if (!data) return <span>Carregando...</span>;

  const {
    setReloadPageTrigger,
    reloadPageTrigger,
    filteredFiles,
    simpleModalStatus,
  } = useContext(MyContext);

  const handleSubmit = async (formData: DataShape) => {
    const validationResult = await validateForm(formData);

    if (validationResult.message) {
      return setFormError(validationResult.message);
    } else {
      createMutate(data, formData, mutate);
      await PasswordManager.createUserPassword(formData);
      setIsModalOpen(false);
      return setReloadPageTrigger(!reloadPageTrigger);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.GlobalContainer>
      <Header files={data} />
      <div className="secondary">
        {simpleModalStatus && <LeftModal />}
        <div className="third">
          <h2>Todos os itens</h2>
          <FileSystem files={filteredFiles ? filteredFiles : data} />
        </div>
      </div>

      <ModalComponent
        errorMessage={formError}
        onClose={closeModal}
        isOpen={isModalOpen}
        onSubmit={handleSubmit}
      />
      <Button
        customStyle={customHomeButton}
        onClick={openModal}
        type="button"
        text={<IoMdAdd />}
      />
    </S.GlobalContainer>
  );
}

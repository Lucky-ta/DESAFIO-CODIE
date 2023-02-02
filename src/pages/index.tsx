import { useContext, useState } from "react";

import { IoMdAdd } from "react-icons/io";

import HeaderComponent from "components/Pages/Home/Header/HeaderComponent";
import LeftOptions from "components/Pages/Home/LeftOptions/LeftOptions";
import FileSystem from "components/Pages/Home/FileSystem/FileSystem";
import { ModalComponent } from "components/Modal";

import { validateForm } from "utils/yupFormValidation/yupValidation";
import { createMutate } from "utils/mutateFunctions/mutate";
import PasswordManager from "utils/fileSystemFunctions";

import useFetch from "hooks/swrHook";

import MyContext from "context/MyContext";

import { DataShape } from "interfaces/interfaces";

import { Button } from "components/Buttons";

import { customHomeButton } from "styles/custom/button";
import * as GlobalContainer from "styles/global";

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
    <GlobalContainer.GlobalContainer>
      <HeaderComponent data={data} />
      <GlobalContainer.GlobalContainer className="secondary">
        {simpleModalStatus && <LeftOptions />}
        <GlobalContainer.GlobalContainer className="third">
          <h2>Todos os itens</h2>
          <FileSystem data={filteredFiles ? filteredFiles : data} />
        </GlobalContainer.GlobalContainer>
      </GlobalContainer.GlobalContainer>

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
    </GlobalContainer.GlobalContainer>
  );
}

import { createPassword } from "../services/api/passwordsApi";
import HeaderComponent from "../components/Header/HeaderComponent";
import { validateForm } from "../yupFormValidation/yupValidation";
import PasswordManager from "../utils/fileSystemFunctions";
import LeftOptions from "../components/LeftOptions/LeftOptions";
import FileSystem from "../components/FileSystem/FileSystem";
import * as StyledButton from "../components/Buttons/index";
import { useContext, useState, useEffect } from "react";
import ModalComponent from "../components/Modal/Modal";
import { DataShape } from "../interfaces/interfaces";
import * as GlobalContainer from "../styles/global";
import { getFiles } from "../services/api/filesApi";
import MyContext from "../context/MyContext";
import { IoMdAdd } from "react-icons/io";
import useFetch from "../hooks/swrHook";
import { createMutate } from "../utils/mutateFunctions/mutate";

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
      <StyledButton.AddPasswordButton
        data-testid="openModal"
        onClick={openModal}
        type="button"
      >
        {<IoMdAdd />}
      </StyledButton.AddPasswordButton>
    </GlobalContainer.GlobalContainer>
  );
}

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

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formError, setFormError] = useState("");

  const { data: fetchData } = useFetch();
  if (!fetchData) return <span>Carregando...</span>;

  const {
    setReloadPageTrigger,
    reloadPageTrigger,
    filteredFiles,
    simpleModalStatus,
  } = useContext(MyContext);

  const handleSubmit = async (data: DataShape) => {
    const validationResult = await validateForm(data);

    if (validationResult.message) {
      return setFormError(validationResult.message);
    } else {
      await PasswordManager.createUserPassword(data);
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getFiles();
  //     setData(response);
  //   };
  //   fetchData();
  // }, [reloadPageTrigger]);

  return (
    <GlobalContainer.GlobalContainer>
      <HeaderComponent data={fetchData} />
      <GlobalContainer.GlobalContainer className="secondary">
        {simpleModalStatus && <LeftOptions />}
        <GlobalContainer.GlobalContainer className="third">
          <h2>Todos os itens</h2>
          <FileSystem data={fetchData} />
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

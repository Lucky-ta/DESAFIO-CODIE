import HeaderComponent from "../components/Header/HeaderComponent";
import LeftOptions from "../components/LeftOptions/LeftOptions";
import * as StyledButton from "../components/Buttons/index";
import ModalComponent from "../components/Modal/Modal";
import * as GlobalContainer from "../styles/global";
import { useContext, useState } from "react";
import MyContext from "../context/MyContext";
import { IoMdAdd } from "react-icons/io";
import FileSystem from "../components/FileSystem/FileSystem";
import { DataShape } from "../interfaces/interfaces";
import { validateForm } from "../yupFormValidation/yupValidation";
import { createPassword, getAllPasswords } from "../services/api/passwordsApi";
import { addPasswordToFile } from "../utils/fileSystemFunctions";

export default function Home() {
  const { files, setShouldRequestPasswords } = useContext(MyContext);
  const [formError, setFormError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (data: DataShape) => {
    const validationResult = await validateForm(data);
    if (validationResult.message) {
      return setFormError(validationResult.message);
    } else {
      const result = await createPassword(data);

      addPasswordToFile(result, files);
      setIsModalOpen(false);
      return setShouldRequestPasswords(true);
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
      <LeftOptions />
      <GlobalContainer.GlobalContainer className="secondary">
        <HeaderComponent />
        <GlobalContainer.GlobalContainer className="third">
          <h2>Todos os itens</h2>
          <FileSystem />
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

import HeaderComponent from "../components/Header/HeaderComponent";
import LeftOptions from "../components/LeftOptions/LeftOptions";
import * as StyledButton from "../components/Buttons/index";
import ModalComponent from "../components/Modal/Modal";
import * as GlobalContainer from "../styles/global";
import { useContext, useState, useEffect } from "react";
import MyContext from "../context/MyContext";
import { IoMdAdd } from "react-icons/io";
import FileSystem from "../components/FileSystem/FileSystem";
import { DataShape } from "../interfaces/interfaces";
import { validateForm } from "../yupFormValidation/yupValidation";
import { addPasswordToFile } from "../utils/fileSystemFunctions";
import { getFiles } from "../services/api/filesApi";

export default function Home() {
  const { files, setShouldRequestPasswords, shouldRequestPasswords } =
    useContext(MyContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formError, setFormError] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = async (data: DataShape) => {
    const validationResult = await validateForm(data);

    if (validationResult.message) {
      return setFormError(validationResult.message);
    } else {
      await addPasswordToFile(data.file, data);
      setIsModalOpen(false);
      return setShouldRequestPasswords(!shouldRequestPasswords);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFiles();
      setData(response);
    };
    fetchData();
  }, [shouldRequestPasswords]);

  return (
    <GlobalContainer.GlobalContainer>
      <LeftOptions />
      <GlobalContainer.GlobalContainer className="secondary">
        <HeaderComponent />
        <GlobalContainer.GlobalContainer className="third">
          <h2>Todos os itens</h2>
          <FileSystem data={data} />
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

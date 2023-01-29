import HeaderComponent from "../components/Header/HeaderComponent";
import LeftOptions from "../components/LeftOptions/LeftOptions";
import * as StyledButton from "../components/Buttons/index";
import ModalComponent from "../components/Modal/Modal";
import * as GlobalContainer from "../styles/global";
import { useContext, useEffect, useState } from "react";
import MyContext from "../context/MyContext";
import { IoMdAdd } from "react-icons/io";
import { getAllPasswords } from "../services/api/passwordsApi";
import * as StyledPassCard from "../components/PasswordsCard/index";
import PasswordCard from "../components/PasswordsCard/PasswordCard";

export default function Home() {
  const { setIsModalOpen, shouldRequestPasswords, files } =
    useContext(MyContext);
  const [passwords, setPasswords] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchPasswords = async () => {
      const allPasswords = await getAllPasswords();
      setPasswords(allPasswords);
    };
    fetchPasswords();
  }, [shouldRequestPasswords]);

  console.log(passwords);

  return (
    <GlobalContainer.GlobalContainer>
      <LeftOptions />
      <GlobalContainer.GlobalContainer className="secondary">
        <HeaderComponent />
        <h2>Todos os itens</h2>

        {files.length <= 0 ? (
          <span>Nenhuma senha por aqui.</span>
        ) : (
          files.map(() => {
            return <PasswordCard />;
          })
        )}
      </GlobalContainer.GlobalContainer>
      <ModalComponent />
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

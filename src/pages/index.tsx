import HeaderComponent from "../components/Header/HeaderComponent";
import LeftOptions from "../components/LeftOptions/LeftOptions";
import * as StyledButton from "../components/Buttons/index";
import ModalComponent from "../components/Modal/Modal";
import * as GlobalContainer from "../styles/global";
import { useContext } from "react";
import MyContext from "../context/MyContext";
import { IoMdAdd } from "react-icons/io";
import FileSystem from "../components/FileSystem/FileSystem";

export default function Home() {
  const { setIsModalOpen } = useContext(MyContext);

  const openModal = () => {
    setIsModalOpen(true);
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

import HeaderComponent from "../components/Header/HeaderComponent";
import LeftOptions from "../components/LeftOptions/LeftOptions";
import * as StyledButton from "../components/Buttons/index";
import ModalComponent from "../components/Modal/Modal";
import * as GlobalContainer from "../styles/global";
import MyContext from "../context/MyContext";
import { IoMdAdd } from "react-icons/io";
import { useContext } from "react";

export default function Home() {
  const { setIsModalOpen } = useContext(MyContext);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <GlobalContainer.GlobalContainer>
      <LeftOptions />
      <HeaderComponent />
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

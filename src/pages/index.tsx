import HeaderComponent from "../components/Header/HeaderComponent";
import LeftOptions from "../components/LeftOptions/LeftOptions";
import * as StyledButton from "../components/Buttons/index";
import * as StyledModal from "../components/Modal/index";
import * as GlobalContainer from "../styles/global";
import * as StyledButtons from "../components/Buttons";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import Modal from "react-modal";

export default function Home() {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <GlobalContainer.GlobalContainer>
      <LeftOptions />
      <HeaderComponent />
      <StyledButton.AddPasswordButton onClick={openModal} type="button">
        {<IoMdAdd />}
      </StyledButton.AddPasswordButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledModal.ModalHeader>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Adicionar senha</h2>
          <StyledButtons.CloseModalButton onClick={closeModal}>
            X
          </StyledButtons.CloseModalButton>
        </StyledModal.ModalHeader>
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button type="button">Cancelar</button>
          <button type="submit">Salvar</button>
        </form>
      </Modal>
    </GlobalContainer.GlobalContainer>
  );
}

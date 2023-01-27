import HeaderComponent from "../components/Header/HeaderComponent";
import LeftOptions from "../components/LeftOptions/LeftOptions";
import * as StyledButton from "../components/Buttons/index";
import * as StyledModal from "../components/Modal/index";
import * as GlobalContainer from "../styles/global";
import * as StyledButtons from "../components/Buttons";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import Modal from "react-modal";
import { Form } from "unform";
import Input from "../components/Inputs/Input";

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

  const handleSubmit = (data) => {
    console.log(data);
  };

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
        <Form onSubmit={handleSubmit}>
          <div>
            <Input name="url" />
            <Input name="name" />
            <Input name="file" />
            <Input type="email" name="email" />
            <Input type="password" name="password" />
            <button type="button">Cancelar</button>
            <button type="submit">Salvar</button>
          </div>
        </Form>
      </Modal>
    </GlobalContainer.GlobalContainer>
  );
}

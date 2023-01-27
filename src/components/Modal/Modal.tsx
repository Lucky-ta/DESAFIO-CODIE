import { useContext } from "react";
import Modal from "react-modal";
import { Form } from "unform";
import Input from "../../components/Inputs/Input";
import * as StyledModal from "../Modal/index";
import * as StyledButtons from "../Buttons/index";
import MyContext from "../../context/MyContext";

export default function ModalComponent() {
  const customStyles: any = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "60%",
      backgroundColor: "#f2f3f6",
      padding: 0,
      paddingBottom: "1rem",
      textAlign: "center",
    },
  };

  const { isModalOpen, setIsModalOpen } = useContext(MyContext);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <StyledModal.ModalHeader>
        <h2>Adicionar senha</h2>
        <StyledButtons.CloseModalButton onClick={closeModal}>
          X
        </StyledButtons.CloseModalButton>
      </StyledModal.ModalHeader>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="url">
          URL:
          <Input id="url" name="url" />
        </label>
        <StyledModal.ModalContentContainer>
          <label htmlFor="name">
            NOME:
            <Input id="name" name="name" />
          </label>
          <label htmlFor="file">
            PASTA:
            <Input id="file" name="file" />
          </label>
          <label htmlFor="email">
            NOME DE USUÁRIO:
            <Input id="email" type="email" name="email" />
          </label>
          <label htmlFor="password">
            SENHA:
            <Input id="password" type="password" name="password" />
          </label>
        </StyledModal.ModalContentContainer>
        <StyledModal.ModalButtonsContainer>
          <StyledButtons.Button onClick={closeModal} type="button">
            Cancelar
          </StyledButtons.Button>
          <StyledButtons.Button type="submit">Salvar</StyledButtons.Button>
        </StyledModal.ModalButtonsContainer>
      </Form>
    </Modal>
  );
}

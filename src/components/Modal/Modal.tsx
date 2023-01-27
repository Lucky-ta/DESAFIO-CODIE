import { useContext } from "react";
import Modal from "react-modal";
import * as StyledModal from "../Modal/index";
import * as StyledButtons from "../Buttons/index";
import MyContext from "../../context/MyContext";
import FormComponent from "../Form/FormComponent";

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
      <FormComponent />
    </Modal>
  );
}

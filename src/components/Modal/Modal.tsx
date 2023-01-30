import { useContext, useState } from "react";
import Modal from "react-modal";
import * as StyledModal from "../Modal/index";
import * as StyledButtons from "../Buttons/index";
import MyContext from "../../context/MyContext";
import FormComponent from "../Form/FormComponent";
import { validateForm } from "../../yupFormValidation/yupValidation";
import { addPasswordToFile } from "../../utils/fileSystemFunctions";
import { createPassword } from "../../services/api/passwordsApi";
import { DataShape } from "../../interfaces/interfaces";

interface MoalPropsShape {
  onSubmit: (data: DataShape) => void;
  formError: string;
}

export default function ModalComponent({
  onSubmit,
  formError,
}: MoalPropsShape) {
  const customStyles: any = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "70%",
      maxWidth: "90rem",
      backgroundColor: "#f2f3f6",
      padding: 0,
      paddingBottom: "1rem",
      textAlign: "center",
    },
  };

  const { isModalOpen, setIsModalOpen, files, setShouldRequestPasswords } =
    useContext(MyContext);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <StyledModal.ModalHeader>
        <h2>Adicionar senha</h2>
        <StyledButtons.CloseModalButton onClick={closeModal}>
          X
        </StyledButtons.CloseModalButton>
      </StyledModal.ModalHeader>
      <FormComponent formError={formError} onSubmit={onSubmit} />
    </Modal>
  );
}

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { DataShape } from "../../interfaces/interfaces";
import * as StyledButtons from "../Buttons/index";
import * as StyledModal from "../Modal/index";
import * as StyledForm from "../Form/index";
import Input from "../Inputs/Input";
import { useState } from "react";
import Modal from "react-modal";
import { Form } from "unform";
interface MoalPropsShape {
  onSubmit: (data: DataShape) => void;
  isOpen: boolean;
  onClose: (booleanValue) => void;
  initialValue?: DataShape;
  errorMessage: string;
}

export default function ModalComponent({
  onSubmit,
  initialValue,
  isOpen,
  onClose,
  errorMessage,
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
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <StyledModal.ModalHeader>
        <h2>Adicionar senha</h2>
        <StyledButtons.CloseModalButton onClick={onClose}>
          X
        </StyledButtons.CloseModalButton>
      </StyledModal.ModalHeader>
      <Form initialData={initialValue} onSubmit={onSubmit}>
        <StyledForm.Label htmlFor="url">
          <StyledForm.FormFieldName>URL:</StyledForm.FormFieldName>
          <Input id="url" name="url" />
        </StyledForm.Label>
        <StyledModal.ModalContentContainer>
          <StyledForm.Label htmlFor="name">
            <StyledForm.FormFieldName>Nome:</StyledForm.FormFieldName>
            <Input id="name" name="name" />
          </StyledForm.Label>
          <StyledForm.Label htmlFor="file">
            <StyledForm.FormFieldName>Pasta:</StyledForm.FormFieldName>
            <Input id="file" name="file" />
          </StyledForm.Label>
          <StyledForm.Label htmlFor="email">
            <StyledForm.FormFieldName>
              Nome de usuário:
            </StyledForm.FormFieldName>
            <Input id="email" type="email" name="email" />
          </StyledForm.Label>
          <StyledForm.Label htmlFor="password">
            <StyledForm.FormFieldName>Senha do site:</StyledForm.FormFieldName>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
            />
            <StyledButtons.ShowHidePasswordButton
              type="button"
              data-testid="toggleButton"
              onClick={toggleShowPassword}
            >
              {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </StyledButtons.ShowHidePasswordButton>
          </StyledForm.Label>
        </StyledModal.ModalContentContainer>
        <StyledModal.ModalButtonsContainer>
          <StyledButtons.Button onClick={onClose} type="button">
            Cancelar
          </StyledButtons.Button>
          <StyledButtons.Button className="secondary" type="submit">
            Salvar
          </StyledButtons.Button>
        </StyledModal.ModalButtonsContainer>
      </Form>
      {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
    </Modal>
  );
}

import { useContext } from "react";
import * as StyledModal from "../Modal/index";
import * as StyledButtons from "../Buttons/index";
import { Form } from "unform";
import Input from "../../components/Inputs/Input";
import MyContext from "../../context/MyContext";
import * as StyledForm from "./index";

export default function FormComponent() {
  const { setIsModalOpen } = useContext(MyContext);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
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
          <StyledForm.FormFieldName>Nome de usuário:</StyledForm.FormFieldName>
          <Input id="email" type="email" name="email" />
        </StyledForm.Label>
        <StyledForm.Label htmlFor="password">
          <StyledForm.FormFieldName>Senha do site:</StyledForm.FormFieldName>
          <Input id="password" type="password" name="password" />
        </StyledForm.Label>
      </StyledModal.ModalContentContainer>
      <StyledModal.ModalButtonsContainer>
        <StyledButtons.Button onClick={closeModal} type="button">
          Cancelar
        </StyledButtons.Button>
        <StyledButtons.Button type="submit">Salvar</StyledButtons.Button>
      </StyledModal.ModalButtonsContainer>
    </Form>
  );
}

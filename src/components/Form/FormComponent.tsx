import { validateForm } from "../../yupFormValidation/yupValidation";
import { addPasswordToFile } from "../../utils/fileSystemFunctions";
import { createPassword } from "../../services/api/passwordsApi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { DataShape } from "../../interfaces/interfaces";
import Input from "../../components/Inputs/Input";
import * as StyledButtons from "../Buttons/index";
import MyContext from "../../context/MyContext";
import * as StyledModal from "../Modal/index";
import { useContext, useState } from "react";
import * as StyledForm from "./index";
import { Form } from "unform";

export default function FormComponent() {
  const { setIsModalOpen, setShouldRequestPasswords, files } =
    useContext(MyContext);

  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (data: DataShape) => {
    const validationResult = await validateForm(data);
    if (validationResult.message) {
      return setFormError(validationResult.message);
    } else {
      const result = await createPassword(data);

      addPasswordToFile(result, files);
      setIsModalOpen(false);
      setShouldRequestPasswords(true);
      return setFormError("");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
        <StyledButtons.Button onClick={closeModal} type="button">
          Cancelar
        </StyledButtons.Button>
        <StyledButtons.Button className="secondary" type="submit">
          Salvar
        </StyledButtons.Button>
      </StyledModal.ModalButtonsContainer>
      {formError.length !== 0 && (
        <StyledForm.FormErrorMessage>{formError}</StyledForm.FormErrorMessage>
      )}
    </Form>
  );
}

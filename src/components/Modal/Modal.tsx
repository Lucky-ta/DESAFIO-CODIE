import React, { useRef, useState } from "react";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import useFetch from "hooks/swrHook";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { Button, FormButton } from "components/Buttons";
import { Input } from "components/Inputs/Input";

import { DataShape } from "interfaces/interfaces";
import { IModal } from "./interface";

import { yupFormValidation } from "utils/yupFormValidation/yupValidation";
import PasswordManager from "utils/fileSystemFunctions";

import { getFiles } from "services/api/filesApi";
import * as S from "./styles";

export function ModalComponent({
  initialValue,
  isOpen,
  closeModal,
  requestType,
  folder,
}: IModal) {
  const [showPassword, setShowPassword] = useState(false);

  const formRef = useRef<FormHandles>();

  const { mutate } = useFetch();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const createFolder = async (formData: DataShape) => {
    const validationResult = await yupFormValidation(formData);
    if (validationResult) {
      formRef.current.setErrors(validationResult);
    } else {
      await PasswordManager.createUserPassword(formData);
      const allFiles = await getFiles();
      mutate(allFiles);
      closeModal();
    }
  };

  const editFolder = async (formData: DataShape) => {
    const validationResult = await yupFormValidation(formData);
    if (validationResult) {
      formRef.current.setErrors(validationResult);
    } else {
      await PasswordManager.updateUserPassword(folder, formData);
      const allFiles = await getFiles();
      mutate(allFiles);
      closeModal();
    }
  };

  const handleSubmit = (formData: DataShape) => {
    switch (requestType) {
      case "POST":
        createFolder(formData);
        break;
      case "PATCH":
        editFolder(formData);
        break;
      default:
        break;
    }
  };

  return (
    <S.Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      <div className="header">
        <h2>Adicionar senha</h2>
        <div className="close-button">
          <Button type="button" text="X" onClick={closeModal} />
        </div>
      </div>
      <Form ref={formRef} initialData={initialValue} onSubmit={handleSubmit}>
        <label htmlFor="url">
          <span>URL:</span>
          <Input type="text" id="url" name="url" />
        </label>
        <div className="form">
          <label htmlFor="name">
            <span>Nome:</span>
            <Input type="text" id="name" name="name" />
          </label>
          <label htmlFor="file">
            <span>Pasta:</span>
            <Input type="text" id="file" name="file" />
          </label>
          <label htmlFor="email">
            <span>Nome de usuário:</span>
            <Input id="email" type="email" name="email" />
          </label>
          <label htmlFor="password">
            <span>Senha do site:</span>
            <div className="toggle-button">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
              />
              <Button
                type="button"
                data-testid="toggleButton"
                onClick={toggleShowPassword}
                text={showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              />
            </div>
          </label>
        </div>
        <div className="buttons">
          <FormButton
            className="cancel-button"
            onClick={closeModal}
            type="button"
          >
            Cancelar
          </FormButton>
          <FormButton className="save-button" type="submit">
            Salvar
          </FormButton>
        </div>
      </Form>
    </S.Modal>
  );
}

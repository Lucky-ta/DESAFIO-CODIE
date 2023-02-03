import React, { useContext, useRef, useState } from "react";

import MyContext from "context/MyContext";

import useFetch from "hooks/swrHook";

import { Form } from "@unform/web";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { Button, FormButton } from "components/Buttons";
import { Input } from "components/Inputs/Input";

import { DataShape } from "interfaces/interfaces";
import { IModal } from "./interface";

import { yupFormValidation } from "utils/yupFormValidation/yupValidation";
import { createMutate } from "utils/mutateFunctions/mutate";
import PasswordManager from "utils/fileSystemFunctions";

import * as S from "./styles";

export function ModalComponent({
  initialValue,
  isOpen,
  closeModal,
  files,
}: IModal) {
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { reloadPageTrigger, setReloadPageTrigger } = useContext(MyContext);

  const formRef: any = useRef();
  const { mutate } = useFetch();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (formData: DataShape) => {
    const validationResult = await yupFormValidation(formData);
    if (validationResult) {
      console.log(formRef);

      formRef.current.setErrors(validationResult);
    } else {
      createMutate(files, formData, mutate);
      await PasswordManager.createUserPassword(formData);
      setIsModalOpen(false);
      return setReloadPageTrigger(!reloadPageTrigger);
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

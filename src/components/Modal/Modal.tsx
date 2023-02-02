import { useState } from "react";

import { Form } from "unform";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { Input } from "components/Inputs/Input";
import { Button } from "components/Buttons";

import { IModal } from "./interface";

import * as S from "./styles";

export function ModalComponent({
  onSubmit,
  initialValue,
  isOpen,
  onClose,
  errorMessage,
}: IModal) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <div className="header">
        <h2>Adicionar senha</h2>
        <div className="close-button">
          <Button type="button" text="X" onClick={onClose} />
        </div>
      </div>
      <Form initialData={initialValue} onSubmit={onSubmit}>
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
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
            />
            <div className="toggle-button">
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
          <Button onClick={onClose} type="button" text="Cancelar" />
          <Button className="secondary" type="submit" text="Salvar" />
        </div>
      </Form>
      {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
    </S.Modal>
  );
}

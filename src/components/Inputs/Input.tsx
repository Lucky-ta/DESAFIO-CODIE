import { useRef, useEffect } from "react";

import { useField } from "@unform/core";

import { IInput } from "./interface";

import * as S from "./styles";

export function Input({ name, ...rest }: IInput) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  console.log(error);
  return (
    <S.Input>
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
      <span style={{ color: "red" }}>{error}</span>
    </S.Input>
  );
}

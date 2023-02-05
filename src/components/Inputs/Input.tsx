import { useRef, useEffect } from "react";

import { useField } from "@unform/core";

import { IInput } from "./interface";

import * as S from "./styles";

export function Input({ name, ...rest }: IInput) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <S.Input>
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </S.Input>
  );
}

import { useRef, useEffect } from "react";

import { useField } from "unform";

import { IInput } from "./interface";

import * as S from "./styles";

export function Input({ name, ...rest }: IInput) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);

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
    </S.Input>
  );
}

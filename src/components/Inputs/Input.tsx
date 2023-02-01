import { useRef, useEffect } from "react";
import * as StyledInput from "./index";
import { useField } from "unform";

export default function Input({ name, ...rest }) {
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
    <StyledInput.FormInput
      defaultValue={defaultValue}
      ref={inputRef}
      {...rest}
    />
  );
}

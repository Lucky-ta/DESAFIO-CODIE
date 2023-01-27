import { useRef, useEffect } from "react";
import { useField } from "unform";

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return <input ref={inputRef} {...rest}/>;
}

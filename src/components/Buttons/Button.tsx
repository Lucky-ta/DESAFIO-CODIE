import { IButton } from "./interface";

import * as S from "./styles";

export function Button({
  text,
  type,
  onClick,
  customStyle,
  customClassName,
}: IButton) {
  return (
    <S.Button className={customClassName}>
      <button style={customStyle} type={type} onClick={onClick}>
        {text}
      </button>
    </S.Button>
  );
}

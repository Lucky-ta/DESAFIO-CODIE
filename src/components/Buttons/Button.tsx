import { IButton } from "./interface";

import * as S from "./styles";

export function Button({ text, type, onClick, customStyle }: IButton) {
  return (
    <S.Button>
      <button style={customStyle} type={type} onClick={onClick}>
        {text}
      </button>
    </S.Button>
  );
}

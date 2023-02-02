import { FaHome } from "react-icons/fa";

import * as S from "./styles";

export function LeftModal() {
  return (
    <S.LeftModal>
      <button type="button">
        {<FaHome fontSize={30} />}
        Todos os itens
      </button>
    </S.LeftModal>
  );
}

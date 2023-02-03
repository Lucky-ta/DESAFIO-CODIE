import { useContext } from "react";

import { MdOutlineSort } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";

import MyContext from "context/MyContext";

import * as S from "./styles";

export function Header() {
  const { setFilterWord, setSimpleModalStatus, simpleModalStatus } =
    useContext(MyContext);

  const handlerFilter = ({ value: word }) => {
    setFilterWord(word);
  };

  const handleModalStatus = () => {
    setSimpleModalStatus(!simpleModalStatus);
  };
  return (
    <S.Header>
      <button className="left-modal-button" onClick={handleModalStatus}>
        {<MdOutlineSort />}
      </button>
      <h2>Almaden...</h2>
      <button className="header-button" type="button">
        {<BiSearchAlt2 />}
      </button>
      <input
        type="text"
        placeholder="Pesquisar no meu cofre"
        onChange={({ target }) => handlerFilter(target)}
      />
    </S.Header>
  );
}

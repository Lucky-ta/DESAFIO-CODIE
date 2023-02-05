import { useContext } from "react";
import { MdOutlineSort } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";

import MyContext from "context/MyContext";

import * as S from "./styles";

export function Header() {
  const { setFilterWord, setSimpleModalStatus, simpleModalStatus } =
    useContext(MyContext);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterWord(event.target.value);
  };

  const handleModalStatus = () => {
    setSimpleModalStatus(!simpleModalStatus);
  };

  return (
    <S.Header>
      <button className="left-modal-button" onClick={handleModalStatus}>
        <MdOutlineSort />
      </button>
      <h2>Almaden...</h2>
      <div>
        <BiSearchAlt2 className="search-icon" />
        <input
          type="text"
          placeholder="Pesquisar no meu cofre"
          onChange={handleFilter}
        />
      </div>
    </S.Header>
  );
}

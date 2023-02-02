import { useContext, useState } from "react";

import { MdOutlineSort } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";

import MyContext from "../../../../context/MyContext";

import { DataShape, FileShape } from "../../../../interfaces/interfaces";
import { IHeader } from "./interface";

import * as S from "./styles";

export function Header({ files }: IHeader) {
  const { setFilteredFiles, setSimpleModalStatus, simpleModalStatus } =
    useContext(MyContext);
  const [pageReload, setPageReload] = useState(false);

  const filterFiles = ({ value: word }) => {
    const wordToLowerCase = word.toString().toLowerCase();

    const dataCopy = [...files];
    const dataFilter = dataCopy.filter((object: FileShape) => {
      return object.passwords.some((pass: DataShape) => {
        return Object.values(pass).some((val) =>
          val.toString().toLowerCase().includes(wordToLowerCase)
        );
      });
    });

    if (word.length !== 0) {
      setFilteredFiles(dataFilter);
      setPageReload(!pageReload);
      return;
    } else {
      setFilteredFiles(files);
      setPageReload(!pageReload);
      return;
    }
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
        onChange={({ target }) => filterFiles(target)}
      />
    </S.Header>
  );
}

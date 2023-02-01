import { DataShape, FileShape } from "../../interfaces/interfaces";
import MyContext from "../../context/MyContext";
import { MdOutlineSort } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { useContext, useState } from "react";
import * as StyledHeader from "./index";

export default function HeaderComponent({ data }) {
  const { setFilteredFiles, setSimpleModalStatus, simpleModalStatus } =
    useContext(MyContext);
  const [pageReload, setPageReload] = useState(false);

  const filterFiles = ({ value: word }) => {
    const wordToLowerCase = word.toString().toLowerCase();

    const dataCopy = [...data];
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
      setFilteredFiles(data);
      setPageReload(!pageReload);
      return;
    }
  };

  const handleModalStatus = () => {
    setSimpleModalStatus(!simpleModalStatus);
  };

  return (
    <StyledHeader.HeaderContainer>
      <StyledHeader.HeaderOptionsModalButton onClick={handleModalStatus}>
        {<MdOutlineSort />}
      </StyledHeader.HeaderOptionsModalButton>
      <StyledHeader.HeaderTitle>Almaden...</StyledHeader.HeaderTitle>
      <StyledHeader.HeaderButton type="button">
        {<BiSearchAlt2 />}
      </StyledHeader.HeaderButton>
      <StyledHeader.HeaderInput
        type="text"
        placeholder="Pesquisar no meu cofre"
        onChange={({ target }) => filterFiles(target)}
      />
    </StyledHeader.HeaderContainer>
  );
}

import * as StyledHeader from "./index";
import { BiSearchAlt2 } from "react-icons/bi";
import MyContext from "../../context/MyContext";
import { useContext } from "react";
import { MdOutlineSort } from "react-icons/md";
import { DataShape, FileShape } from "../../interfaces/interfaces";

export default function HeaderComponent({ data }) {
  const { setFilteredFiles, setSimpleModalStatus, simpleModalStatus } =
    useContext(MyContext);

  const filterFiles = ({ value: word }) => {
    const wordToLowerCase = word.toString().toLowerCase();

    const dataFilter = data.filter((object: FileShape) => {
      return object.passwords.some((pass: DataShape) => {
        return Object.values(pass).some((val) =>
          val.toString().toLowerCase().includes(wordToLowerCase)
        );
      });
    });
    return setFilteredFiles(dataFilter);
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

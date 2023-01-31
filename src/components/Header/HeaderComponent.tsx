import * as StyledHeader from "./index";
import { BiSearchAlt2 } from "react-icons/bi";
import MyContext from "../../context/MyContext";
import { useContext } from "react";
import { DataShape, FileShape } from "../../interfaces/interfaces";

export default function HeaderComponent({ data }) {
  const { setSearchedFile } = useContext(MyContext);

  const filterFiles = ({ value: word }) => {
    const wordToLowerCase = word.toString().toLowerCase();

    const dataFilter = data.filter((object: FileShape) => {
      return object.passwords.some((pass: DataShape) => {
        return Object.values(pass).some((val) =>
          val.toString().toLowerCase().includes(wordToLowerCase)
        );
      });
    });

    return setSearchedFile(dataFilter);
  };

  return (
    <StyledHeader.HeaderContainer>
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

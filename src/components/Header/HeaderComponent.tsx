import * as StyledHeader from "./index";
import { BiSearchAlt2 } from "react-icons/bi";
import { useContext } from "react";
import MyContext from "../../context/MyContext";

export default function HeaderComponent() {
  const { files } = useContext(MyContext);

  const filterFiles = ({ value }) => {
    console.log(value);
    console.log(files);

    const filteredFiles = files;
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

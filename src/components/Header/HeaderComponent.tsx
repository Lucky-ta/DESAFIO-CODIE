import * as StyledHeader from "./index";
import { BiSearchAlt2 } from "react-icons/bi";

export default function HeaderComponent() {
  return (
    <StyledHeader.HeaderContainer>
      <h2>Almaden...</h2>
      <StyledHeader.HeaderButton type="button">
        {<BiSearchAlt2 />}
      </StyledHeader.HeaderButton>
      <StyledHeader.HeaderInput
        type="text"
        placeholder="Pesquisar no meu cofre"
      />
    </StyledHeader.HeaderContainer>
  );
}

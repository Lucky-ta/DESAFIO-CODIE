import * as StyledHeader from "./index";
import { BiSearchAlt2 } from "react-icons/bi";

export default function HeaderComponent() {
  return (
    <StyledHeader.HeaderContainer>
      <StyledHeader.HeaderTitle>Almaden...</StyledHeader.HeaderTitle>
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

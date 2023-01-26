import * as StyledLeftOptions from "./index";
import { FaHome } from "react-icons/fa";

export default function LeftOptions() {
  return (
    <StyledLeftOptions.LeftOptionContainer>
      <StyledLeftOptions.LeftOptionButton type="button">
        {<FaHome fontSize={30}/>}
        Todos os itens
      </StyledLeftOptions.LeftOptionButton>
    </StyledLeftOptions.LeftOptionContainer>
  );
}

import * as StyledPassCard from "./index";
import * as StyledButtons from "../Buttons/index";
import { TiSpanner } from "react-icons/ti";
import { BiTrash } from "react-icons/bi";

export default function PasswordCard({ cardData }) {
  return (
    <StyledPassCard.PassCardContainer>
      <StyledPassCard.PassCardContentContainer className="headerButton">
        <StyledButtons.PasswordCardButton type="button">
          Iniciar
        </StyledButtons.PasswordCardButton>
      </StyledPassCard.PassCardContentContainer>

      <StyledPassCard.PassCardContentContainer className="content">
        <StyledPassCard.PassCardContentContainer className="infoContainer">
          <StyledPassCard.PassCardContent className="name">
            {cardData.name}
          </StyledPassCard.PassCardContent>
          <StyledPassCard.PassCardContent className="email">
            {cardData.email}
          </StyledPassCard.PassCardContent>
        </StyledPassCard.PassCardContentContainer>

        <StyledPassCard.PassCardContentContainer className="buttons">
          <StyledButtons.PassCardActionsButton>
            {<TiSpanner />}
          </StyledButtons.PassCardActionsButton>
          <StyledButtons.PassCardActionsButton>
            {<BiTrash />}
          </StyledButtons.PassCardActionsButton>
        </StyledPassCard.PassCardContentContainer>
      </StyledPassCard.PassCardContentContainer>
    </StyledPassCard.PassCardContainer>
  );
}

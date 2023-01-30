import * as StyledPassCard from "./index";
import * as StyledButtons from "../Buttons/index";
import { TiSpanner } from "react-icons/ti";
import { BiTrash } from "react-icons/bi";
import { DataShape } from "../../interfaces/interfaces";
import { deletePassword } from "../../utils/fileSystemFunctions";
import MyContext from "../../context/MyContext";
import { useContext } from "react";

interface PasswordCardPropsShape {
  cardData: DataShape;
  index: number;
}

export default function PasswordCard({
  cardData,
  index,
}: PasswordCardPropsShape) {
  console.log(cardData);

  const { files, setFiles } = useContext(MyContext);

  const redirectToUrl = () => {
    window.open(cardData.url, "_blank");
  };

  const handleEditCard = () => {
    console.log("vamos editar o card");
  };

  const handleDeleteCard = () => {
    console.log("vamos deletar o card");
    const result = deletePassword(files, cardData.file, index, setFiles);
    console.log(files);
  };

  return (
    <StyledPassCard.PassCardContainer>
      <StyledPassCard.PassCardContentContainer className="headerButton">
        <StyledButtons.PasswordCardButton onClick={redirectToUrl} type="button">
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
          <StyledButtons.PassCardActionsButton
            onClick={handleEditCard}
            type="button"
          >
            {<TiSpanner />}
          </StyledButtons.PassCardActionsButton>
          <StyledButtons.PassCardActionsButton
            onClick={handleDeleteCard}
            type="button"
          >
            {<BiTrash />}
          </StyledButtons.PassCardActionsButton>
        </StyledPassCard.PassCardContentContainer>
      </StyledPassCard.PassCardContentContainer>
    </StyledPassCard.PassCardContainer>
  );
}

import * as StyledButton from "./index";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function AddPasswordButton() {
  return (
    <StyledButton.AddPasswordButton type="button">
      {<IoIosAddCircleOutline />}
    </StyledButton.AddPasswordButton>
  );
}

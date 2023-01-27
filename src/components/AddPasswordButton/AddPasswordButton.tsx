import * as StyledButton from "./index";
import { IoMdAdd } from "react-icons/io";

export default function AddPasswordButton() {
  return (
    <StyledButton.AddPasswordButton type="button">
      {<IoMdAdd />}
    </StyledButton.AddPasswordButton>
  );
}

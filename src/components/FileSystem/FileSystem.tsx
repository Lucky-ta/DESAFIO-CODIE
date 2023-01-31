import * as StyledFileSysyem from "./index";
import PasswordCard from "../PasswordsCard/PasswordCard";

export default function FileSystem({ data }) {
  return (
    <StyledFileSysyem.FileSystemContainer>
      {data.map(({ fileName, passwords }) => {
        return (
          <StyledFileSysyem.FileSystemContainer>
            <h3>
              {fileName} ({passwords.length})
            </h3>
            <StyledFileSysyem.FileSystemContainer className="passwordsContainer">
              {passwords.map((password, index) => {
                return (
                  <PasswordCard key={index} index={index} cardData={password} />
                );
              })}
            </StyledFileSysyem.FileSystemContainer>
          </StyledFileSysyem.FileSystemContainer>
        );
      })}
    </StyledFileSysyem.FileSystemContainer>
  );
}

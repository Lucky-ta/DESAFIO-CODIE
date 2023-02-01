import PasswordCard from "../PasswordsCard/PasswordCard";
import * as StyledFileSysyem from "./index";

export default function FileSystem({ data }) {
  console.log(data);

  return (
    <StyledFileSysyem.FileSystemContainer>
      {data.map(({ fileName, passwords }, index) => {
        return (
          <StyledFileSysyem.FileSystemContainer key={index}>
            <h3>
              {fileName} ({passwords.length})
            </h3>
            <StyledFileSysyem.FileSystemContainer className="passwordsContainer">
              {passwords.map((password, index) => {
                return (
                  <PasswordCard key={index} index={index} password={password} />
                );
              })}
            </StyledFileSysyem.FileSystemContainer>
          </StyledFileSysyem.FileSystemContainer>
        );
      })}
    </StyledFileSysyem.FileSystemContainer>
  );
}

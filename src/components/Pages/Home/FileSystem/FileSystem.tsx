import PasswordCard from "../../../PasswordsCard/PasswordCard";
import * as StyledFileSysyem from "./index";

export default function FileSystem({ data }) {
  return data.length !== 0 ? (
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
  ) : (
    <span>Nenhuma senha por aqui.</span>
  );
}

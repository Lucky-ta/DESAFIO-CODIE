import { getAllPasswords } from "../../services/api/passwordsApi";
import MyContext from "../../context/MyContext";
import { useContext, useEffect } from "react";
import * as StyledFileSysyem from "./index";
import PasswordCard from "../PasswordsCard/PasswordCard";
import useSWR from "swr";

export default function FileSystem() {
  const { files, shouldRequestPasswords, setPasswords } = useContext(MyContext);

  const { data, error, isLoading } = useSWR("/", () => getAllPasswords());
  console.log(data);

  useEffect(() => {
    if (!error) {
      setPasswords(data);
    }
  }, [shouldRequestPasswords]);

  const keys = Object.keys(files);

  return (
    <StyledFileSysyem.FileSystemContainer>
      {keys.length <= 0 ? (
        <span>Nenhuma senha por aqui.</span>
      ) : (
        keys.map((key) => {
          return (
            <StyledFileSysyem.FileSystemContainer className="fileContainer">
              <span>
                {key} ({files[key].length})
              </span>
              <StyledFileSysyem.FileSystemContainer className="fileContent">
                {files[key].map((data, index) => {
                  return <PasswordCard index={index} cardData={data} />;
                })}
              </StyledFileSysyem.FileSystemContainer>
            </StyledFileSysyem.FileSystemContainer>
          );
        })
      )}
      {error && <div>failed to load</div>}
      {isLoading && <div>Loading...</div>}
    </StyledFileSysyem.FileSystemContainer>
  );
}

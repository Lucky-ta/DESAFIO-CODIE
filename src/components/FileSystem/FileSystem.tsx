import { getAllPasswords } from "../../services/api/passwordsApi";
import MyContext from "../../context/MyContext";
import { useContext, useEffect, useState } from "react";
import * as StyledFileSysyem from "./index";
import PasswordCard from "../PasswordsCard/PasswordCard";
import useSWR from "swr";
import { getFiles } from "../../services/api/filesApi";

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
                return <PasswordCard index={index} cardData={password} />;
              })}
            </StyledFileSysyem.FileSystemContainer>
          </StyledFileSysyem.FileSystemContainer>
        );
      })}
    </StyledFileSysyem.FileSystemContainer>
  );
}

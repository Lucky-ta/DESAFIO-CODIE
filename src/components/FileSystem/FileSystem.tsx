import { getAllPasswords } from "../../services/api/passwordsApi";
import MyContext from "../../context/MyContext";
import { useContext, useEffect, useState } from "react";
import * as StyledFileSysyem from "./index";
import PasswordCard from "../PasswordsCard/PasswordCard";
import useSWR from "swr";
import { getFiles } from "../../services/api/filesApi";

export default function FileSystem({ data }) {
  return (
    // <StyledFileSysyem.FileSystemContainer>
    //   {keys.length <= 0 ? (
    //     <span>Nenhuma senha por aqui.</span>
    //   ) : (
    //     keys.map((key) => {
    //       return (
    //         <StyledFileSysyem.FileSystemContainer className="fileContainer">
    //           <span>
    //             {key} ({files[key].length})
    //           </span>
    //           <StyledFileSysyem.FileSystemContainer className="fileContent">
    //             {files[key].map((data, index) => {
    //               return <PasswordCard index={index} cardData={data} />;
    //             })}
    //           </StyledFileSysyem.FileSystemContainer>
    //         </StyledFileSysyem.FileSystemContainer>
    //       );
    //     })
    //   )}

    // </StyledFileSysyem.FileSystemContainer>
    <div>
      {data.map(({ fileName }) => {
        return <h3>{fileName}</h3>;
      })}
    </div>
  );
}

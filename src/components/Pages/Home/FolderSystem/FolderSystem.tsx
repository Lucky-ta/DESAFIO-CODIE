import { FolderCard } from "components/FolderCard";

import { IFolderSystem } from "./interface";

import * as S from "./styles";

export function FileSystem({ folders }: IFolderSystem) {
  return folders.length !== 0 ? (
    <S.FileSystem>
      {folders.map(({ fileName, passwords }, index) => {
        return (
          <div key={index}>
            <h3>{`${fileName} (${passwords.length})`}</h3>
            <div className="folders-container">
              {passwords.map((password, index) => {
                return (
                  <FolderCard key={index} index={index} password={password} />
                );
              })}
            </div>
          </div>
        );
      })}
    </S.FileSystem>
  ) : (
    <span>Nenhuma senha por aqui.</span>
  );
}

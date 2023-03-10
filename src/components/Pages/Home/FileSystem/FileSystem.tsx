import { FolderCard } from "components/FolderCard";

import { IFilesSystem } from "./interface";

import * as S from "./styles";

export function FileSystem({ files }: IFilesSystem) {
  return files.length !== 0 ? (
    <S.FileSystem>
      {files.map(({ fileName, passwords }, index) => (
        <div key={index}>
          <h3>{`${fileName} (${passwords.length})`}</h3>
          <div className="folders-container">
            {passwords.map((password, passwordIndex) => (
              <FolderCard
                key={passwordIndex}
                index={passwordIndex}
                password={password}
              />
            ))}
          </div>
        </div>
      ))}
    </S.FileSystem>
  ) : (
    <span>Nenhuma senha por aqui.</span>
  );
}

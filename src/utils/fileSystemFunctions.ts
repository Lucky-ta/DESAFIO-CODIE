import { DataShape, FileShape } from "../interfaces/interfaces";

export const addPasswordToFile = (newCurrentFile: DataShape, files: FileShape) => {
    const fileExists = Object.keys(files).includes(newCurrentFile.file);
  
    if (fileExists) {
      // Adiciona senha ao arquivo existente
      files[newCurrentFile.file] = [...files[newCurrentFile.file], newCurrentFile];
      return;
    }
    // Cria novo arquivo
    files[newCurrentFile.file] = [newCurrentFile];
  };
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

export const deletePassword = (files: FileShape, key: string, passwordIndex: number, setFiles: any) => {
  const { [key]: deletedPasswords, ...newFiles } = files;
  deletedPasswords.splice(passwordIndex, 1);

  if (deletedPasswords.length === 0) {
    setFiles(newFiles);
    return;
  }

  setFiles({
    ...newFiles,
    [key]: deletedPasswords
  });
};
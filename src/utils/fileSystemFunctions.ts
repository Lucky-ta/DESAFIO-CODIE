import { DataShape, FileShape } from "../interfaces/interfaces";
import { addPassword, createFile, getFiles } from "../services/api/filesApi";

export const addPasswordToFile = async (fileName: string, password: DataShape) => {
  const allFiles = await getFiles();
  const isFileExists = allFiles.filter((file) => file.fileName === fileName);

  if (isFileExists.length !== 0) {
    const result = await addPassword(fileName, password);
    return result;
  }
  const result = await createFile(password)
  return result;

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

export const updatePassword = ( files: FileShape,
  key: string,
  passwordIndex: number,
  updatedPassword: DataShape,
  setFiles: any) => {


  const passwords = files[key];
  passwords[passwordIndex] = updatedPassword;

  setFiles({ ...files, [key]: passwords });
};

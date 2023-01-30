import axios from "axios";
import { DataShape, FileShape } from "../interfaces/interfaces";
import API_URLS from "../services/api/apiUrls/urls";
import { addPassword, createFile, getFiles } from "../services/api/filesApi";

// export const addPasswordToFile = async (newCurrentFile: DataShape, fileName: string) => {
    // const fileExists = Object.keys(files).includes(newCurrentFile.file);
  
    // if (fileExists) {
    //   Adiciona senha ao arquivo existente
    //   files[newCurrentFile.file] = [...files[newCurrentFile.file], newCurrentFile];
    //   return;
    // }
    // Cria novo arquivo
    // files[newCurrentFile.file] = [newCurrentFile];

//     const filesApi = await getFiles();
//     const fileExists = Object.keys(filesApi).includes(newCurrentFile.file);
    
//     if (fileExists) {
//       const addPass = await addPasswordToFile(newCurrentFile, fileName);
//       console.log("add password to exist file: ", addPass);

//     }

//     const newFile = {
//       [fileName]: [newCurrentFile]
//     };

//     const createFileResult = await createFile(newFile)
//     console.log("create file with password: ", createFileResult);

    
// };

export const addPasswordToFile = async (fileName: string, password: DataShape) => {
  const allFiles = await getFiles();
  const isFileExists = allFiles.filter((file) => file.fileName === fileName);

  console.log(isFileExists);
  
  if (isFileExists.length !== 0) {
    const result = await addPassword(fileName, password);
    return console.log("adicionado: ", result);

  }
  const result = await createFile(password)
  return console.log("criado: ", result);

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

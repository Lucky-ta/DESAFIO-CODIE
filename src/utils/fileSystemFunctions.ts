import { DataShape, FileShape } from "../interfaces/interfaces";
import { addPassword, checkIfPasswordIsUnique, createFile, deleteFile, deletePassword, getFiles, updatePassword } from "../services/api/filesApi";
import { deletePasswordById } from "../services/api/passwordsApi";

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

export const deletePasswordFromFile = async (fileName: string, passwordId: number) => {
  
  const isPasswordUnique = await checkIfPasswordIsUnique(fileName);
  
  if (isPasswordUnique.status) {
    await deletePasswordById(passwordId);
    return await deleteFile(isPasswordUnique.data);
  } else {
    console.log(isPasswordUnique);
    await deletePasswordById(passwordId);
    return await deletePassword(fileName, isPasswordUnique.data, passwordId);
  }
};


export const updatePasswordService = async (fileName: string, updatedPassword: DataShape) => {
  const fileId = await checkIfPasswordIsUnique(fileName);

  const r =  await updatePassword(fileName, fileId.data, updatedPassword);

  console.log(r);
  
};

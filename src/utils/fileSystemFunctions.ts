import { createPassword, deletePasswordById, updatePasswordById } from "services/api/passwordsApi";
import * as ApiRoute from 'services/api/filesApi'

import { DataShape, FileShape } from "interfaces/interfaces";

class PasswordManager {
  async createUserPassword(password: DataShape, fileName: string) {
    const newPassword: DataShape = await createPassword(password);

    const allFiles = await ApiRoute.getFiles();

    const isFileExists = allFiles.filter((file: FileShape) => file.fileName === fileName);

    if (isFileExists.length !== 0) {
      const result = await ApiRoute.addPasswordToFile(fileName, newPassword);
      return result;
    }
    const result = await ApiRoute.createFile(newPassword)
    return result;
  }

  async deleteUserPassword(password: DataShape) {
    const { file: fileName, id: passwordId } = password;

    const isPasswordUnique = await ApiRoute.checkIfPasswordIsUnique(fileName);

    if (isPasswordUnique.status) {
      await deletePasswordById(passwordId);
      return await ApiRoute.deleteFile(isPasswordUnique.data);
    } else {
      await deletePasswordById(passwordId);
      return await ApiRoute.deletePassword(fileName, isPasswordUnique.data, passwordId);
    }
  }

  async updateUserPassword(password: DataShape, formData: DataShape) {
    const { file: fileName } = password;
    const updatedPassword = await updatePasswordById(formData, password.id);

    const fileId = await ApiRoute.checkIfPasswordIsUnique(fileName);
    return await ApiRoute.updatePassword(fileName, fileId.data, updatedPassword);
  }


  async movePassword(fileName, password) {
    const formatedPassword = {
      ...password,
      file: fileName || "NONE",
    };

    await this.deleteUserPassword(password);

    await this.createUserPassword(
      formatedPassword,
      formatedPassword.file
    );
  };
}

export default new PasswordManager();

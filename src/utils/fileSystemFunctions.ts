import { createPassword, deletePasswordById, updatePasswordById } from "services/api/passwordsApi";
import * as ApiRoute from 'services/api/filesApi'

import { DataShape } from "interfaces/interfaces";

class PasswordManager {
  async createPassword(password: DataShape, fileName: string) {
    const newPassword = await createPassword(password);
    const allFiles = await ApiRoute.getFiles();
    const isFileExists = allFiles.find((file) => file.fileName === fileName);

    return isFileExists
      ? ApiRoute.addPasswordToFile(fileName, newPassword)
      : ApiRoute.createFile(newPassword);
  }

  async deletePassword(password: DataShape) {
    const { file: fileName, id: passwordId } = password;
    const { status, data } = await ApiRoute.checkIfPasswordIsUnique(fileName);

    await deletePasswordById(passwordId);

    return status
      ? ApiRoute.deletePasswordFile(data)
      : ApiRoute.deletePassword(fileName, data, passwordId);
  }

  async updatePassword(password: DataShape, formData: DataShape) {
    const { file: fileName } = password;
    const updatedPassword = await updatePasswordById(formData, password.id);
    const { data: fileId } = await ApiRoute.checkIfPasswordIsUnique(fileName);

    await ApiRoute.updatePassword(fileName, fileId, updatedPassword);
    return updatedPassword;
  }

  async movePassword(fileName: string, password: DataShape) {
    const formatedPassword = {
      ...password,
      file: fileName || "NONE",
    };

    await this.deletePassword(password);
    await this.createPassword(formatedPassword, formatedPassword.file);
    return formatedPassword;
  }
}

export default new PasswordManager();
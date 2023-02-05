import { DataShape, FileShape } from "interfaces/interfaces";

import AXIOS_API from "./api";

const handleAxiosError = (e: any) => e.message;

export const getFiles = async () => {
  try {
    const response = await AXIOS_API.get("/files");
    return response.data;
  } catch (e) {
    return handleAxiosError(e);
  }
};

export const createFile = async (passwordData: DataShape) => {
  try {
    const response = await AXIOS_API.post("/files", {
      fileName: passwordData.file,
      passwords: [passwordData],
    });
    return response.data;
  } catch (e) {
    return handleAxiosError(e);
  }
};

export const addPasswordToFile = async (fileName: string, passwordData: DataShape) => {
  try {
    const response = await AXIOS_API.get(`/files?fileName=${fileName}`);
    const file = response.data[0];
    const updatedFile = await AXIOS_API.put(`/files/${file.id}`, {
      ...file,
      passwords: [...file.passwords, passwordData],
    });
    return updatedFile.data;
  } catch (e) {
    return handleAxiosError(e);
  }
};

export const deletePasswordFile = async (fileId: number) => {
  try {
    const response = await AXIOS_API.delete(`/files/${fileId}`);
    return response.data;
  } catch (e) {
    return handleAxiosError(e);
  }
};

export const deletePassword = async (fileName: string, fileId: number, passwordId: number) => {
  try {
    const filesResponse = await AXIOS_API.get("/files");
    const file = filesResponse.data.find((file: FileShape) => file.fileName === fileName);
    if (!file) {
      return {
        error: `File with name "${fileName}" not found`,
      };
    }

    const updatedPasswords = file.passwords.filter((password: DataShape) => password.id !== passwordId);

    const response = await AXIOS_API.patch(
      `/files/${fileId}`,
      { passwords: updatedPasswords },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (e: any) {
    return e.message;
  }
};

export const updatePassword = async (fileName: string, fileId: number, updatedPassword: DataShape) => {
  try {
    const filesResponse = await AXIOS_API.get("/files");
    const file = filesResponse.data.find(
      (file: FileShape) => file.fileName === fileName && file.id === fileId
    );
    if (!file) {
      return {
        error: `File with name "${fileName}" and id "${fileId}" not found`,
      };
    }

    const passwordIndex = file.passwords.findIndex((password: DataShape) => password.id === updatedPassword.id);
    if (passwordIndex === -1) {
      return { error: `Password with id "${updatedPassword.id}" not found` };
    }

    file.passwords[passwordIndex] = updatedPassword;

    const response = await AXIOS_API.patch(`/files/${fileId}`, file, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (e: any) {
    return e.message;
  }
};

export const checkIfPasswordIsUnique = async (fileName: string) => {
  try {
    const response = await AXIOS_API.get(`/files?fileName=${fileName}`);
    const [file] = response.data;
    const passwordExists = file.passwords.length === 1;
    return { data: file.id, status: passwordExists };
  } catch (error) {
    return { error: error.message };
  }
};
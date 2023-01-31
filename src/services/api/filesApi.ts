import { DataShape } from "../../interfaces/interfaces";
import AXIOS_API from "./api"

export const getFiles = async () => {
    try {
      const response = await AXIOS_API.get('/files');
      return response.data;
    } catch (error) {
      return error.message;
    }
  };

  export const createFile = async (password: DataShape) => {
    try {
      const fileToCreate = {
        fileName: password.file,
        passwords: [password],
      };
  
      const response = await AXIOS_API.post('/files', fileToCreate);
      return response.data;
    } catch (error) {
      console.error(error);
      return {};
    }
  };

  
  export const addPassword = async (fileName: string, password: DataShape) => {
    try {
      const response = await AXIOS_API.get(`/files?fileName=${fileName}`);
      const file = response.data[0];
      file.passwords.push(password);
  
      const updatedFile = await AXIOS_API.put(`/files/${file.id}`, file);
      return updatedFile.data;
    } catch (error) {
      console.error(error);
      return {};
    }
  };
  
  export const deleteFile = async (fileId: number) => {
    try {
      const response = await AXIOS_API.delete(`/files/${fileId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return {};
    }
};

export const deletePassword = async (fileName: string, passwordId: number) => {
    try {
      const response = await AXIOS_API.delete(`/files/${fileName}/passwords/${passwordId}`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error("Arquivo ou senha não encontrado.");
      } else {
        throw error;
      }
    }
  }


export const checkIfPasswordIsUnique = async (fileName: string) => {
    try {
      const response = await AXIOS_API.get(`/files?fileName=${fileName}`);
      const { data } = response;
      
      const passwordExists = data[0].passwords.length === 1;
      
      if (passwordExists) {
        return data[0].id;
      }
      return false;
    } catch (error) {
      throw error;
    }
  };
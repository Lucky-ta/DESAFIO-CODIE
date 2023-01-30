import { DataShape } from "../../interfaces/interfaces";
import AXIOS_API from "./api"

export const getFiles = async () => {
    try {
      const response = await AXIOS_API.get('/files');
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  export const createFile = async (password: DataShape) => {
    try {
      const fileToCreate = {
        fileName: password.file,
        passwords: [password],
        id: Date.now()
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
  
  export const deleteFile = async (fileName: string) => {
    try {
      const response = await AXIOS_API.delete(`/files/${fileName}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return {};
    }
};
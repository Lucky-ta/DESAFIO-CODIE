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

export const deletePassword = async (fileName: string, fileId: number, passwordId: number) => {
    const files = await AXIOS_API.get('/files');
    const file = files.data.find((file: any) => file.fileName === fileName);

    const updatedPasswords = file.passwords.filter((password: any) => password.id !== passwordId);
    
    try {
        const response = await AXIOS_API.patch(`/files/${fileId}`, { passwords: updatedPasswords }, {
          headers: {'Content-Type': 'application/json'}
        });
        
      return response.data;
    } catch (error) {
      return error.message;
    }
}

export const updatePassword = async (fileName: string, fileId: number, updatedPassword: DataShape) => {
  const files = await AXIOS_API.get('/files');
  const file = files.data.find((file: any) => file.fileName === fileName && file.id === fileId);

  if (!file) {
  return { error: 'File with name "${fileName}" and id "${fileId}" not found '};
  }

  const passwordIndex = file.passwords.findIndex((password: any) => password.id === updatedPassword.id);

  if (passwordIndex === -1) {
  return { error: 'Password with id "${updatedPassword.id}" not found' };
  }

  console.log(updatedPassword);
  
  file.passwords[passwordIndex] = updatedPassword;

  try {
    const response = await AXIOS_API.patch(`/files/${fileId}`, file, {
    headers: { 'Content-Type': 'application/json' }
    });
    console.log(response.data);
    
    return response.data;
    } catch (error) {
    return error.message;
    }
  }


export const checkIfPasswordIsUnique = async (fileName: string) => {
    try {
      const response = await AXIOS_API.get(`/files?fileName=${fileName}`);
      const { data } = response;
      
      const passwordExists = data[0].passwords.length === 1;
      
      if (passwordExists) {
        return { data: data[0].id, status: true};
      }
      return { data: data[0].id, status: false};
    } catch (error) {
      throw error;
    }
  };
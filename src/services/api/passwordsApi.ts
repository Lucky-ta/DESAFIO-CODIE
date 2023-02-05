import { DataShape } from "interfaces/interfaces";

import AXIOS_API from "./api";

const handleApiError = (e: any) => ({ message: e.message });

export const createPassword = async (password: DataShape) => {
  try {
    const response = await AXIOS_API.post("/passwords", password);
    return response.data;
  } catch (e) {
    return handleApiError(e);
  }
};

export const deletePasswordById = async (passwordId: number) => {
  try {
    const response = await AXIOS_API.delete(`/passwords/${passwordId}`);
    return response.data;
  } catch (e) {
    return handleApiError(e);
  }
};

export const updatePasswordById = async (
  updatedPassword: DataShape,
  passwordId: number
) => {
  try {
    const response = await AXIOS_API.put(
      `/passwords/${passwordId}`,
      updatedPassword
    );
    return response.data;
  } catch (e) {
    return handleApiError(e);
  }
};
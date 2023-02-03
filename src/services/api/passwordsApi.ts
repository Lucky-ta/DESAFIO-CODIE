import { DataShape } from "interfaces/interfaces";

import AXIOS_API from "./api";

export const createPassword = async (password: DataShape) => {
    try {
        const response = await AXIOS_API.post("/passwords", password);
        return response.data;
    } catch (e: any) {
        return { message: e.message };
    }
};

export const deletePasswordById = async (passwordId: number) => {
    try {
        const response = await AXIOS_API.delete(`/passwords/${passwordId}`);
        return response.data;
    } catch (e: any) {
        return { message: e.message };
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
    } catch (e: any) {
        return { message: e.message };
    }
};

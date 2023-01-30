import { DataShape } from "../../interfaces/interfaces";
import AXIOS_API from "./api";

export const createPassword = async (data: DataShape) => {
    try {
        const response = await AXIOS_API.post('/create', JSON.stringify(data), {
            headers: {'Content-Type': 'application/json'}
        });
        return response.data;
    } catch (e: any) {
        return { message: e.message }
    }
};

export const getAllPasswords = async () => {
    try {
        const response = await AXIOS_API.get('/create');
        return response.data;
    } catch (e: any) {
        return { message: e.message }
    }
}

export const deletePasswordById = async (passwordId: number) => {
    try {
        const response = await AXIOS_API.delete(`/create/${passwordId}`);
        return response.data;
    } catch (e: any) {
        return { message: e.message }
    }
}

export const updatePasswordById = async (passwordId: number, updatedData: DataShape) => {
    try {
        const response = await AXIOS_API.put(`/create/${passwordId}`, updatedData, {
            headers: {'Content-Type': 'application/json'}
        });
        return response.data;
    } catch (e: any) {
        return { message: e.message }
    }
}

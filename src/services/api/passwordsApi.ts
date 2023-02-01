import { DataShape } from "../../interfaces/interfaces";
import AXIOS_API from "./api";

export const createPassword = async (data: DataShape) => {
    try {
        const response = await AXIOS_API.post("/userPasswords",
            JSON.stringify(data),
            {
                headers: { "Content-Type": "application/json" },
            }
        );
        return response.data;
    } catch (e: any) {
        return { message: e.message };
    }
};

export const deletePasswordById = async (passwordId: number) => {
    try {
        const response = await AXIOS_API.delete(`/userPasswords/${passwordId}`);
        return response.data;
    } catch (e: any) {
        return { message: e.message };
    }
};

export const updatePasswordById = async (passwordId: number, updatedData: DataShape) => {
    try {
        const response = await AXIOS_API.put(`/userPasswords/${passwordId}`,
            updatedData
        );
        return response.data;
    } catch (e: any) {
        return { message: e.message };
    }
};

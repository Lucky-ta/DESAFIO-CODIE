import { DataShape } from "../interfaces/interfaces";
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

import { DataShape } from "../interfaces/interfaces"
import { schema } from "./yupSchemas"

export const validateForm = async (formData: DataShape) => {
    try {
        const result = await schema.validate(formData);
        return result;
    } catch (e: any) {
        return { message: e.message }
    }
}
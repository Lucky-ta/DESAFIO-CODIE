import { formatData } from "../utils/formatData/formatUserData";
import { DataShape } from "../interfaces/interfaces"
import { schema } from "./yupSchemas"

export const validateForm = async (formData: DataShape) => {
    const formatedData = formatData(formData);

    try {
        const result = await schema.validate(formatedData);
        return result;
    } catch (e: any) {
        return { message: e.message }
    }
};

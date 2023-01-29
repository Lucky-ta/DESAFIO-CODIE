import { DataShape } from "../interfaces/interfaces"
import { formatData } from "../services/formatData/formatUserData";
import { schema } from "./yupSchemas"

export const validateForm = async (formData: DataShape) => {
    const formatedData = formatData(formData);
    console.log('data formatada: ', formatedData);
    

    try {
        const result = await schema.validate(formatedData);
        return result;
    } catch (e: any) {
        return { message: e.message }
    }
}
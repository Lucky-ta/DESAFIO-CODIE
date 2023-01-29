import { DataShape } from "../../interfaces/interfaces";

export const formatData = (userData: DataShape) => {
    userData.file = userData.file.toUpperCase();
    return userData;
}
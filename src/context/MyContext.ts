import { createContext } from "react";
import { DataShape } from "../interfaces/interfaces";

export type ContextDataShape = {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
    shouldRequestPasswords: boolean;
    setShouldRequestPasswords: (value: boolean) => void;
    files: any;
    setFiles: (newFile: any) => void;
    newCurrentFile: DataShape;
    setNewCurrentFile: (data: DataShape) => void;
}

const MyContext = createContext<ContextDataShape>(null);

export default MyContext;

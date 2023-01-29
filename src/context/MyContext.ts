import { createContext } from "react";
import { DataShape, FileShape } from "../interfaces/interfaces";

export type ContextDataShape = {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
    shouldRequestPasswords: boolean;
    setShouldRequestPasswords: (value: boolean) => void;
    files: FileShape;
    setFiles: (newFile: FileShape) => void;
    passwords: DataShape[];
    setPasswords: (data: DataShape[]) => void;
}

const MyContext = createContext<ContextDataShape>(null);

export default MyContext;

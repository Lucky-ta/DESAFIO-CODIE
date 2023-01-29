import { createContext } from "react";

export type ContextDataShape = {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
    shouldRequestPasswords: boolean;
    setShouldRequestPasswords: (value: boolean) => void;
    files: string[];
    setFiles: (newFile: string[]) => void;
}

const MyContext = createContext<ContextDataShape>(null);

export default MyContext;

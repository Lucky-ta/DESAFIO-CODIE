import { createContext } from "react";
import { DataShape, FileShape } from "../interfaces/interfaces";

export type ContextDataShape = {
    shouldRequestPasswords: boolean;
    setShouldRequestPasswords: (value: boolean) => void;
    passwords: DataShape[];
    setPasswords: (data: DataShape[]) => void;
    searchedFile: FileShape;
    setSearchedFile: (value: FileShape) => void;
}

const MyContext = createContext<ContextDataShape>(null);

export default MyContext;

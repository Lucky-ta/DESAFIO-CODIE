import { createContext } from "react";
import { FileShape } from "../interfaces/interfaces";

export type ContextDataShape = {
    reloadPageTrigger: boolean;
    setReloadPageTrigger: (value: boolean) => void;
    filteredFiles: FileShape;
    setFilteredFiles: (value: FileShape) => void;
}

const MyContext = createContext<ContextDataShape>(null);

export default MyContext;

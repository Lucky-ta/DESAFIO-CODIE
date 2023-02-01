import { FileShape } from "../interfaces/interfaces";
import { createContext } from "react";

export type ContextDataShape = {
    reloadPageTrigger: boolean;
    setReloadPageTrigger: (value: boolean) => void;
    filteredFiles: FileShape;
    setFilteredFiles: (value: FileShape) => void;
};

const MyContext = createContext<ContextDataShape>(null);

export default MyContext;

import { FileShape } from "../interfaces/interfaces";
import { createContext } from "react";

export type ContextDataShape = {
    reloadPageTrigger: boolean;
    setReloadPageTrigger: (value: boolean) => void;
    filteredFiles: FileShape;
    setFilteredFiles: (value: FileShape) => void;
    simpleModalStatus: boolean;
    setSimpleModalStatus: (value: boolean) => void;
};

const MyContext = createContext<ContextDataShape>(null);

export default MyContext;

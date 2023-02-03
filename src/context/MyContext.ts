import { createContext } from "react";

import { FileShape } from "interfaces/interfaces";

export interface ContextDataShape {
    reloadPageTrigger: boolean;
    setReloadPageTrigger: (value: boolean) => void;
    filteredFiles: FileShape[];
    setFilteredFiles: (value: FileShape[]) => void;
    simpleModalStatus: boolean;
    setSimpleModalStatus: (value: boolean) => void;
};

const MyContext = createContext<ContextDataShape>(null);

export default MyContext;

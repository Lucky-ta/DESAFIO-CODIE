import { createContext } from "react";

export interface ContextDataShape {
    reloadPageTrigger: boolean;
    setReloadPageTrigger: (value: boolean) => void;
    simpleModalStatus: boolean;
    setSimpleModalStatus: (value: boolean) => void;
    filterWord: string;
    setFilterWord: (word: string) => void;
};

const MyContext = createContext<ContextDataShape>(null);

export default MyContext;

import { createContext } from "react";

export type ContextDataShape = {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
}

const MyContext = createContext<ContextDataShape>(null);

export default MyContext;

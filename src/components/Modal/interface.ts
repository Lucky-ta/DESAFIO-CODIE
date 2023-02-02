import { DataShape } from "interfaces/interfaces";

export interface IModal {
    onSubmit: (data: DataShape) => void;
    isOpen: boolean;
    onClose: () => void;
    initialValue?: DataShape;
    errorMessage: string;
};

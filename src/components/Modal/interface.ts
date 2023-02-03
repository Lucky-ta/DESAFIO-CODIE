import { DataShape } from "interfaces/interfaces";

export interface IErrorMessages {
    email?: string;
    file?: string;
    name?: string;
    password?: string;
    url?: string;
}

export interface IModal {
    onSubmit?: (data: DataShape) => void;
    isOpen: boolean;
    closeModal?: () => void;
    initialValue?: DataShape;
    errorMessages?: IErrorMessages;
    requestType: string;
    folder?: DataShape;
};

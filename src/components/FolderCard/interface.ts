import { DataShape } from "interfaces/interfaces";

export interface IPasswordCard {
    password: DataShape;
    index: number;
};

export interface ICustomContextMenuTrigger {
    children: React.ReactNode;
}

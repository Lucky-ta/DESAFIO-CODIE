import React from "react";

export interface IButton extends React.ButtonHTMLAttributes<any> {
    text: string | React.ReactElement;
    type: "submit" | "button";
    onClick: () => void;
    customStyle: any;
}

export interface IStyledButtonProps {
    customStyle: any;
}

import React from "react";
import {IComponent} from "./IComponent";

export type colors = 'primary' | 'success' | 'danger';

export interface IButton extends IComponent {
    type?: colors;
    variant?: 'contained' | 'outlined';
    disabled?: boolean;
    onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    className?: string;
}

import {InputHTMLAttributes} from "react";

export interface ITextField extends InputHTMLAttributes<HTMLInputElement> {
    focused?: boolean;
    isError?: boolean;
    errorMessage?: string;
    value: string;
    autofocus?: boolean;
}

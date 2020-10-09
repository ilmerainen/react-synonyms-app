import styled from "styled-components";
import Button from "./Button";
import {IButton} from "interfaces";
import {theme} from "styles/theme";

const StyledButton = styled(Button)`
    color: #fff;
    font-size: 14px;
    padding: 8px 12px;
    font-weight: 700;
    line-height: 14px;
    text-transform: lowercase;
    outline: none;
    border: 0;
    cursor: pointer;
    border-radius: 3px;
    border: 2px solid transparent;

    ${({type, variant}: IButton) => {
        const color = type ? theme.colors[type] : theme.colors.primary;
        
        return `
            &:focus {
                color: ${color};
                background: none;
            }
            
            &, &:active {
                color: ${variant === 'outlined' ? color : '#fff'};
                border-color: ${color};
                background: ${variant === "outlined" ? 'none' : color};
            }
        `
    }};

    opacity: ${({disabled}: IButton) => {
    return disabled ? .5 : 1;
}}
`;

export {StyledButton as Button};

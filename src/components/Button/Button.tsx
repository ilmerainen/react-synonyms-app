import React from 'react';

import {IButton} from "interfaces";

const Button: React.FC<IButton> = ({type, variant, disabled, onClick, children, className}) => {
    const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        onClick(e);
    };

    return <button className={className} onClick={handleClick}>{children}</button>
};

export default Button;

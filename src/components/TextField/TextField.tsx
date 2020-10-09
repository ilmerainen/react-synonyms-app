import React from 'react';

import {ITextField} from "interfaces";
import {ReactComponent as ErrorIcon} from 'assets/svg/ErrorIcon.svg';

const TextField = React.forwardRef<HTMLInputElement, ITextField>(({className, isError, errorMessage, ...props}, ref) => {
    return <div className={className}>
        <input ref={ref} {...props} />
        {isError && <div>
            <span className="error-icon">
                <ErrorIcon/>
            </span>
            <span className="error-msg">{errorMessage}</span>
        </div>}
    </div>
});

export default TextField;

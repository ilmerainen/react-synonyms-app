import React from 'react';
import ReactDOM from 'react-dom';

const appRoot = document.getElementById('root');

interface IProps {
    container?: Element;
    children: React.ReactElement;
    className?: string;
    open: boolean;
}

const PopupContentContainer: React.FC<IProps> = ({children, open, className}) => {
    const handleClick = (event: React.SyntheticEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            event.currentTarget.remove();
        }
    };

    return open ? <div onClick={handleClick} className={className}>{children}</div> : null;
};

const Popup: React.FC<IProps> = ({open, container, children, className,}) => {
    const domNode = container || appRoot!;

    return ReactDOM.createPortal(<PopupContentContainer className={className} open={open}>{children}</PopupContentContainer>, domNode);
};

export default Popup;

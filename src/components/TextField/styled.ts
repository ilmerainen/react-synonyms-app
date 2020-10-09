import TextField from "./TextField";
import styled from "styled-components";

export default styled(TextField)`
    input {
        border: 0;
        border-bottom: 1px solid;
        outline: none;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        height: 40px;
        width: 100%;
        background: none;
        border-color: rgba(52, 66, 115, 0.5);
    }
    
    margin-bottom: 5px;
    
    &:focus {
        border-color: #344273
    }
    
    .error-icon {
        margin-right: 5px;
    }
    
    .error-msg {
        color: #C23E42;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 14px;
    }
`;

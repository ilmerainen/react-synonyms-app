import Header from "./Header";
import styled from "styled-components";

export default styled(Header)`
    .content {
        display: flex;
        justify-content: space-between;
    }
    
    .header {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 90%;
    }
    
    hr {
        border: 0;
        height: 2px;
        background: #DEDEDE;
    }
`;

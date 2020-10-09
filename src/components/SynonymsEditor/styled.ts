import SynonymsEditor from "./SynonymsEditor";
import styled from "styled-components";

const StyledSynonymsEditor = styled(SynonymsEditor)`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 560px;
    background: #EFEFEF;
    padding: 20px;
    max-height: 100vh;
    overflow: auto;
    
    .close-icon {
        cursor: pointer;
        position: absolute;
        top: 21px;
        right: 21px;
    }
    
    @media (max-width: 414px) {
        width: 100%;
    }
    
    @media (max-width: 414px) {
        min-height: 100vh;
        
        .header-section, .footer-section {
            flex-shrink: 0;
        }
        
        .content {
            flex-grow: 1;
        }
    }
`;

export default StyledSynonymsEditor;

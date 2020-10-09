import styled from "styled-components";

import Word from "./Word";
import {theme} from "styles/theme";

export default styled(Word)`
    color: ${() => theme.colors.primary};
    &:not(:last-child) {
        margin-bottom: 5px;
    }
    
    .word-card {
        display: flex;
        justify-content: space-between;
        padding: 11px;
        background: #fff;
    }
    
    .buttons {
        display: flex;
        align-items: center;
        
        .icon {
            cursor: pointer;
        }
        
        &.buttons-word .icon {
            display: flex;
            opacity: .5;
            
            &:hover {
                opacity: 1;
            }
        }
        
        &.buttons-edit-word {
            *:not(:last-child) {
                margin-right: 12px;
            }
            
            margin-bottom: 10px;
        }
    }
    
    .pen-icon {
        margin-right: 13px;
    }
`;

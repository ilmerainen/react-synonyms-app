import styled from "styled-components";
import Popup from "./Popup";

const StyledPopup = styled(Popup)`
    position: fixed;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    background: rgba(0, 0, 0, .4);
`;

export default StyledPopup;

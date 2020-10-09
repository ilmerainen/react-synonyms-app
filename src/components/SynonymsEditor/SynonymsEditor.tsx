import React, {useEffect, useState} from 'react';

import Popup from "components/Popup/styled";
import WordList from "components/WordList/styled";
import Header from "components/Header/styled";
import {ReactComponent as CloseIcon} from "assets/svg/CloseIcon.svg";
import SynonymInput from "components/SynonymInput/styled";
import {useSynonyms} from "store/storeApi";
import Footer from "components/Footer/styled";
import {SynonymsEditorContext} from "context/SynonymsEditorContext";

interface IProps {
    className?: string;
}

const SynonymsEditor: React.FC<IProps> = ({className}) => {
    const {fetchWords, editableWordsIds} = useSynonyms();
    const [popupIsOpen, setOpenPopup] = useState<boolean>(true);
    const inputRef = React.createRef<HTMLInputElement>();

    useEffect(() => {
        fetchWords();
    }, []);

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    console.log(editableWordsIds);

    return (
        <SynonymsEditorContext.Provider value={{inputRef}}>
            <Popup open={popupIsOpen}>
                <div className={className}>
                    <CloseIcon className="close-icon" onClick={handleClosePopup}/>
                    <Header className="header-section"/>
                    <div className="content">
                        {editableWordsIds.length === 0 && <SynonymInput/>}
                        <WordList/>
                    </div>
                    <Footer className="footer-section"/>
                </div>
            </Popup>
        </SynonymsEditorContext.Provider>
    );
};

export default SynonymsEditor;

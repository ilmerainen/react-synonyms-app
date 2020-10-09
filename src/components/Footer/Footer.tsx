import React from 'react';

import {Button} from "components/Button/styled";
import {useSynonyms} from "store/storeApi";
import {IFooter} from "interfaces";
import {useSynonymEditorContext} from "context/SynonymsEditorContext";

const Footer: React.FC<IFooter> = ({className}) => {
    const {saveChanges, revertChanges} = useSynonyms();
    const {inputRef} = useSynonymEditorContext();

    const handleSaveChanges = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        saveChanges();
        inputRef!.current!.focus();
    };

    const handleRevertChanges = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        revertChanges();
        inputRef!.current!.focus();
    };

    return <div className={className}>
        <hr/>
        <Button className="button" type="success" onClick={handleSaveChanges}>Сохранить
            изменения</Button>
        <Button className="button" type="danger" onClick={handleRevertChanges}>Очистить изменения</Button>
    </div>
};

export default Footer;

import React, {useState} from 'react';

import TextField from "components/TextField/styled";
import {Button} from "components/Button/styled";
import {ISynonymInput, IInputError} from "interfaces";
import {useSynonyms} from "store/storeApi";
import {useSynonymEditorContext} from "context/SynonymsEditorContext";
import {ReactComponent as InfoIcon} from "assets/svg/InfoIcon.svg";

const SynonymInput: React.FC<ISynonymInput> = ({className}) => {
    const {input, changeInput, resetInput} = useSynonyms();
    const {inputRef} = useSynonymEditorContext();
    const {addWord} = useSynonyms();
    const [inputError, setInputError] = useState<IInputError>({
        isError: false,
        message: '',
    });

    const handleAddWordInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        changeInput(e.currentTarget.value);
        setInputError({
            isError: false,
            message: '',
        });
    };

    const handleFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    };

    const handleButtonClick = () => {
        inputRef!.current!.focus();

        if (input.length === 0) {
            setInputError({
                isError: true,
                message: 'Введите минимум один символ'
            });

            return;
        }

        addWord();
        resetInput();
    };

    return <div className={className}>
        <div className="header">
            <h2>Синонимы</h2>
            <span className="icon info-icon"><InfoIcon/></span>
        </div>
        <div>
            <span className="caption">Добавление синонима:</span>
        </div>
        <form onSubmit={handleFormSubmit}>
            <TextField isError={inputError.isError} errorMessage={inputError.message} autoFocus ref={inputRef} placeholder="Введите название" value={input}
                       onChange={handleAddWordInputChange}/>
            <Button type="primary" onClick={handleButtonClick}>Добавить</Button>
        </form>
    </div>
};

export default SynonymInput;

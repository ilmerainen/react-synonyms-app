import React, {useState} from 'react';

import {IInputError, IWord} from "interfaces";
import {ReactComponent as TrashCanIcon} from 'assets/svg/TrashCanIcon.svg';
import {ReactComponent as PenIcon} from 'assets/svg/PenIcon.svg';
import TextField from "../TextField/styled";
import {useSynonyms} from "store/storeApi";
import {Button} from "../Button/styled";
import {ReactComponent as CloseIcon} from "assets/svg/CloseIcon.svg";

const Word: React.FC<IWord> = ({id, value, className}) => {
    const [isEditing, setEditingStatus] = useState<boolean>(false);
    const [input, changeInput] = useState<string>(value);
    const {editWord, deleteWord, pushEditableWord, cancelEditingWord} = useSynonyms();
    const [inputError, setInputError] = useState<IInputError>({
        isError: false,
        message: '',
    });
    const inputRef = React.createRef<HTMLInputElement>();

    const validateInput = (): boolean => {
        if (input.length === 0) {
            setInputError({
                isError: true,
                message: 'Введите минимум один символ'
            });
            inputRef.current!.focus();

            return false;
        } else {
            setInputError({
                isError: false,
                message: '',
            });

            return true;
        }
    };

    const handleFormOnSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateInput()) {
            return
        }
        editWord({id, value: input});
        setEditingStatus(false);
    };

    const handleSaveEditingButtonClick = () => {
        if (!validateInput()) {
            return
        }

        editWord({id, value: input});
    };

    const handleChangeInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
        changeInput(e.currentTarget.value);
    };

    const handleEditingStatus = () => {
        setEditingStatus(!isEditing);

        if (!isEditing) {
            pushEditableWord(id);
        } else {
            cancelEditingWord(id);
        }

        changeInput(value);
    };

    const handleDeleting = () => {
        deleteWord(id);
    };

    return <li className={className}>
        {isEditing ? (
            <div className='edit-word'>
                <span className="caption">редактирование синонима:</span>
                <form onSubmit={handleFormOnSubmit}>
                    <TextField ref={inputRef} autoFocus isError={inputError.isError} errorMessage={inputError.message} value={input}
                               onChange={handleChangeInput}/>
                    <div className="buttons buttons-edit-word">
                        <Button type="primary" onClick={handleSaveEditingButtonClick}>Изменить</Button>
                        <div className="icon cancel-icon" onClick={handleEditingStatus}>
                            <CloseIcon/>
                        </div>
                    </div>
                </form>
            </div>
        ) : (
            <div className='word-card'>
                <h3>{value}</h3>
                <div className="buttons buttons-word">
                    <div className="icon pen-icon" onClick={handleEditingStatus}>
                        <PenIcon onClick={() => {
                        }}/>
                    </div>
                    <div className="icon trash-can-icon" onClick={handleDeleting}>
                        <TrashCanIcon/>
                    </div>
                </div>
            </div>
        )}
    </li>
};

export default Word;

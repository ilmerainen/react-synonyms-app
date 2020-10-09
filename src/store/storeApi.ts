import {useStore} from "./store";
import {IWord} from "../interfaces";

export const useSynonyms = () => {
    const {state, dispatch} = useStore();

    return {
        currentWords: state.currentWords,
        lastSavedWords: state.lastSavedWords,
        editableWordsIds: state.editableWordsIds,
        input: state.input,
        saveChanges() {
            dispatch({type: 'SAVE_CHANGES'});
        },
        revertChanges() {
            dispatch({type: 'REVERT_CHANGES'});
        },
        addWord() {
            dispatch({type: 'ADD_WORD'});
        },
        editWord(word: IWord) {
            dispatch({type: 'EDIT_WORD', payload: word});
        },
        deleteWord(id: number) {
            dispatch({type: 'DELETE_WORD', payload: id});
        },
        eraseAll() {
            dispatch({type: 'ERASE_ALL'});
        },
        fetchWords() {
            dispatch({type: 'FETCH_WORDS'});
        },
        changeInput(value: string) {
            dispatch({type: 'CHANGE_INPUT', payload: value});
        },
        resetInput() {
            dispatch({type: 'RESET_INPUT'});
        },
        pushEditableWord(id: number) {
            dispatch({type: 'PUSH_EDITABLE_WORD', payload: id});
        },
        cancelEditingWord(id: number) {
            dispatch({type: 'CANCEL_EDITING_WORD', payload: id});
        }
    }
};

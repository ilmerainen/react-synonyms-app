import React, {useReducer, useContext} from "react";
import {IStore, ISynonymsManagementState, IWord, IContext} from "interfaces";

export type Action =
    | { type: 'ADD_WORD' }
    | { type: 'EDIT_WORD', payload: IWord }
    | { type: 'DELETE_WORD', payload: number }
    | { type: 'ERASE_ALL', }
    | { type: 'SAVE_CHANGES', }
    | { type: 'REVERT_CHANGES', }
    | { type: 'FETCH_WORDS', }
    | { type: 'CHANGE_INPUT', payload: string }
    | { type: 'RESET_INPUT', }
    | { type: 'PUSH_EDITABLE_WORD', payload: number }
    | { type: 'CANCEL_EDITING_WORD', payload: number };

function reducer(state: ISynonymsManagementState, action: Action): ISynonymsManagementState {
    switch (action.type) {
        case "ADD_WORD": {
            const currentWords = [...state.currentWords];
            const wordsIds = currentWords.map(({id}) => id);
            let uniqueId;

            // for emulating fetching unique id from server
            do {
                uniqueId = Math.floor(Math.random() * 10000000);
            } while (wordsIds.includes(uniqueId));

            currentWords.push({id: uniqueId, value: state.input});

            return {
                ...state,
                currentWords,
            }
        }
        case "EDIT_WORD": {
            const wordIndex = state.currentWords.findIndex(({id}) => action.payload.id === id);
            const currentWords = [...state.currentWords];
            currentWords[wordIndex].value = action.payload.value;
            const editableWordsIds = state.editableWordsIds.filter((id) => action.payload.id !== id);

            return {
                ...state,
                currentWords,
                editableWordsIds,
            }
        }
        case "DELETE_WORD": {
            const currentWords = state.currentWords.filter(({id}) => id !== action.payload);
            const editableWordsIds = state.editableWordsIds.filter((id) => id !== action.payload);

            return {
                ...state,
                currentWords,
                editableWordsIds,
            };
        }
        case "ERASE_ALL": {
            return {
                ...state,
                currentWords: [],
            };
        }
        case "SAVE_CHANGES": {
            localStorage.setItem('words', JSON.stringify(state.currentWords));

            return {
                ...state,
                lastSavedWords: state.currentWords,
            };
        }
        case "REVERT_CHANGES": {
            return {
                ...state,
                currentWords: state.lastSavedWords,
            }
        }
        case "FETCH_WORDS": {
            const currentWordsJson = localStorage.getItem('words');
            const currentWords: IWord[] = [];

            if (currentWordsJson) {
                try {
                    currentWords.push(...JSON.parse(currentWordsJson));
                } catch {

                }
            }

            return {
                ...state,
                currentWords,
                lastSavedWords: currentWords,
            };
        }
        case "CHANGE_INPUT": {
            return {
                ...state,
                input: action.payload,
            }
        }
        case "RESET_INPUT": {
            return {
                ...state,
                input: '',
            };
        }
        case "PUSH_EDITABLE_WORD": {
            const editableWordsIds = [...state.editableWordsIds, action.payload];

            return {
                ...state,
                editableWordsIds,
            };
        }
        case "CANCEL_EDITING_WORD": {
            const editableWordsIds = state.editableWordsIds.filter((id) => action.payload !== id);

            return {
                ...state,
                editableWordsIds,
            };
        }
        default: {
            return state;
        }
    }
}

const initialSynonymsManagementState: ISynonymsManagementState = {
    currentWords: [],
    lastSavedWords: [],
    editableWordsIds: [],
    input: '',
};

const StoreContext = React.createContext<IContext>({
    state: initialSynonymsManagementState,
    dispatch: () => {},
});

export const StoreProvider: React.FC<IStore> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialSynonymsManagementState);

    return <StoreContext.Provider value={{state, dispatch}}>
        {children}
    </StoreContext.Provider>
};

export const useStore = () => useContext(StoreContext);

import {IWord} from "./IWord";

export interface ISynonymsManagementState {
    currentWords: IWord[];
    lastSavedWords: IWord[];
    editableWordsIds: number[];
    input: string;
}

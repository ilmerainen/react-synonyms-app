import {ISynonymsManagementState} from "./ISynonymsManagementState";

export interface IContext {
    state: ISynonymsManagementState;
    dispatch: (action: any) => void;
}

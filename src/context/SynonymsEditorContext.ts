import React, {useContext} from "react";

import {ISynonymsEditorContext} from "../interfaces";

export const SynonymsEditorContext = React.createContext<ISynonymsEditorContext>({
    inputRef: null,
});

export const useSynonymEditorContext = () => useContext(SynonymsEditorContext);
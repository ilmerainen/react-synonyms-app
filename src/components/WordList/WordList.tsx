import React from "react";

import {IWordList} from "interfaces";
import Word from "components/Word/styled";
import {useSynonyms} from "../../store/storeApi";

const WordList: React.FC<IWordList> = ({className}) => {
    const {currentWords: words} = useSynonyms();

    return <ul className={className}>
        {words.map(({id, value}) => {
            return <Word key={id} id={id} value={value}/>
        })}
    </ul>;
};

export default WordList;

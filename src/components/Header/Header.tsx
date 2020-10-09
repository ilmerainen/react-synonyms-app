import React from "react";

import {IHeader} from "interfaces";

const Header: React.FC<IHeader> = ({className}) => {
    return <div className={className}>
        <div className="content">
            <h1 className="header">Редактирование группы синонимов поисковых фраз</h1>
        </div>
        <hr/>
    </div>;
};

export default Header;

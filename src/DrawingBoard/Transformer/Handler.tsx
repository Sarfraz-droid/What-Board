import React from 'react';

import {Transformer} from "react-konva";
import {BoardContext} from "../index";
function Handler(){

    const {TrRef} = React.useContext(BoardContext);

    return (
        <Transformer
            ref={TrRef}
        />
    );
}

export default Handler;
import React, {useContext} from "react";

import ShowPen from "./ShowPen";
import {BoardData} from "../Datahandler/BoardData";
import {BoardContext} from "../index";

function ShowBoard(props: { Board: BoardData, key: number}) {
    // console.log("ShowBoard",props.Board.id);
    switch (props.Board.type) {
        case 'pen':
            return (
                <ShowPen Data = {props.Board.Pen.data} id={props.Board.id} penPoints={props.Board.Pen.points} />
            );
    }

    return (<></>);
}

export default ShowBoard;
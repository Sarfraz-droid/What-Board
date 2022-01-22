import {Line} from "react-konva";
import {useContext,useState} from "react";
import {Pen} from "../Datahandler/ToolData";

import {BoardContext} from "../index";

function DrawPen(props: { Data: Pen, id: number, penPoints: Array<number> }) {

    const {setBoardData,currentLine,isErasing} = useContext(BoardContext);


    console.log("Draw Pen : ", props.id);

    return (
        <>
            <Line
                points={props.penPoints}
                stroke={props.Data.color}
                strokeWidth={props.Data.width}
                lineCap={'round'}
                onMouseOver={() => {
                    if(props.id == -1) return;
                    if(isErasing) {
                        setBoardData.DeleteData(props.id);
                    }
                }}

            />
        </>
    )
}

export default DrawPen;
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
                onMouseDown={(e) => {
                    console.log("Mouse Down : ", e.evt.buttons)
                }}

                draggable={true}
                onMouseOver={(e) => {

                    if(props.id == -1) return;
                    console.log("Mouse Over : ", e.evt.buttons);
                    if(e.evt.buttons === 1) {
                        setBoardData.DeleteData(props.id);
                        console.log("Erasing");
                        e.target.remove()

                    }
                }}

            />
        </>
    )
}

export default DrawPen;
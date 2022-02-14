import {Line, Transformer} from "react-konva";
import {useContext,useState} from "react";
import {Pen} from "../Datahandler/ToolData";

import {BoardContext} from "../index";

function DrawPen(props: { Data: Pen, id: string, penPoints: Array<number> }) {

    const {setBoardData,currentLine,isErasing,shapeRef,TrRef} = useContext(BoardContext);


    // console.log("Draw Pen : ", props.id);

    return (
            <Line
                points={props.penPoints}
                stroke={props.Data.color}
                strokeWidth={props.Data.width}
                lineCap={'round'}
                onMouseDown={(e) => {
                    console.log("Mouse Down : ", e.evt.buttons)
                }}
                _useStrictMode={true}
                bezier={true}
                tension={0.4}
                onClick={(e) => {
                    console.log("Click : ", e.evt.buttons)
                    shapeRef.current = e.target;
                    TrRef.current.nodes([e.target]);
                    TrRef.current.getLayer().batchDraw();

                }}
                draggable={currentLine.currentPen === "cursor" ? true : false}
                onMouseOver={(e) => {
                    if(props.id === "-1") return;
                    console.log("Mouse Over : ", e.evt.buttons);
                    if(e.evt.buttons === 1 && isErasing) {
                        setBoardData.DeleteData(props.id);
                        console.log("Erasing");

                    }
                }}

            >
            </Line>
    )
}

export default DrawPen;
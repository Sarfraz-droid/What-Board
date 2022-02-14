
import { Stage, Layer, Line, Transformer, useStrictMode } from 'react-konva';
import React,{createContext, useState} from 'react';
import useDraw from './CustomHooks/useDraw/useDraw';
import useBoardData from "./CustomHooks/useBoardData/useBoardData";
import {BoardData} from "./Datahandler/BoardData";
import {DrawState} from "./Datahandler/ToolData";
import { SmoothCurves } from './SmoothCurves';
import styles from "../App.module.scss";

import ShowBoard from "./ShowData/ShowBoard";
import DrawPen from "./ShowData/ShowPen";
import Handler from "./Transformer/Handler";

import Tools from "./ToolShow/Tools";

// @ts-ignore
export const BoardContext = createContext<ContextType>({} as any);

function DrawingBoard() {

  // @ts-ignore
  const [currentLine, setcurrentLine] = useDraw();
  const [isDrawing, setisDrawing] = useState(false);
  const [isErasing, setisErasing] = useState(false);
  const [boardData, setBoardData] = useBoardData();

  // USE REF
  const shapeRef = React.useRef<any>(null);
  const TrRef = React.useRef<any>(null);

  // const [isErasing, setisErasing] = useState(false);

  useStrictMode(true);

  React.useEffect(() => {
    console.log(shapeRef,TrRef);
    if(shapeRef.current != null && TrRef != null){
      TrRef.current.nodes([shapeRef.current]);
      TrRef.current.getLayer().batchDraw();
    }
  }, [shapeRef]);



  function MouseDown(e: any) {

    if(currentLine.Pen.isEraser){
      setisDrawing(false);
      setisErasing(true);
      return;
    }

    setisDrawing(true);
    const points:Array<number> = [e.evt.offsetX, e.evt.offsetY];

    console.log(e);

    if(e.target === e.currentTarget)
    {
      TrRef.current.nodes([]);
    }

    // @ts-ignore
    setcurrentLine.setPenPoints(points,true);
  }

  function MouseMove(e: any) {
    if (isDrawing) {
      const points:Array<number> = [e.evt.offsetX, e.evt.offsetY];
      // @ts-ignore
      setcurrentLine.setPenPoints(points,false);
    }
  }

  function  MouseUp(_e: any) {
    setisDrawing(false);
    setisErasing(false);
    // @ts-ignore
    const points = setcurrentLine.getPenPoints()
    const newLine:Array<number> = SmoothCurves(points);
    setcurrentLine.getPenPoints();
    setcurrentLine.setPenPoints([],true);

    if(newLine.length <= 1) return;

    // @ts-ignore
    setBoardData.addBoardData(currentLine.currentPen, {
      data: setcurrentLine.getCurrentTool(),
      points: newLine
    })
    console.log("Board");
    console.log(boardData);
  }

  function ShowData() {
    switch (currentLine.currentPen) {
      case 'pen':
        const penPoints = setcurrentLine.getPenPoints();
        return(
          <DrawPen Data={currentLine.Pen} penPoints={penPoints} id={"-1"} />
        )
        break;
    }
  }


  function ShowBoardData() {
    // @ts-ignore
    const board_info = setBoardData.getData();

    return (
        <React.Fragment>
          {board_info.map((info:BoardData, index:number) => {
            return (
                <ShowBoard Board={info} key={index} />
            )
          })}
        </React.Fragment>
    )
  }

  // @ts-ignore
  return (
    <div>
      <BoardContext.Provider value={{currentLine,setcurrentLine,boardData,setBoardData,isErasing,shapeRef,TrRef}}>
        <Tools/>
        <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={MouseDown}
        onMouseMove={MouseMove}
        onMouseUp={MouseUp}
      >
        <Layer>
          <BoardContext.Provider value={{currentLine,setcurrentLine,boardData,setBoardData,isErasing,shapeRef,TrRef}}>

          {ShowBoardData()}

          {ShowData()}

          <Handler />

          </BoardContext.Provider>
        </Layer>
      </Stage>
      </BoardContext.Provider>
    </div>
  )
}

export default  DrawingBoard;

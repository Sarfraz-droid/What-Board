import {useState} from "react";

import {DrawState,Pen } from "../../Datahandler/ToolData";


import {Default_Pen, Default_DrawState} from "../../Datahandler/ToolData";


export default function UseDraw() {

    const [state, setState] = useState<DrawState>(Default_DrawState as DrawState);
    const [penPoints,set_PenPoints] = useState([] as Array<number>);

    function setPen(pen: Pen) {
        setState((state) => {
            return {
                ...state,
                Pen: pen
            }
        })
    }
    //PEN FUNCTIONS
    function setPenPoints(Points: Array<number>,override: boolean) {
        if(override){
            set_PenPoints(Points);
        }else {
            set_PenPoints([
                ...penPoints,
                ...Points
            ]);
        }
    }


    function getPenPoints() {
        return penPoints;
    }

    function setCurrentValue(pen: string) {
        // @ts-ignore
        setState((state) => ({
            ...state,
            currentPen: pen,
        }));
    }

    function getCurrentTool() {
        switch (state.currentPen) {
            case "pen":
                return state.Pen;
            default:
                return Default_Pen;
        }
    }

    function setCurrentPen(type: string){
        setState((state) => ({
            ...state,
            currentPen: type,
        }));
    }

    return [state, {setPen, setCurrentValue,setPenPoints,getPenPoints,getCurrentTool,setCurrentPen}] as any
}
import {useState} from "react";
import {BoardData} from "../../Datahandler/BoardData";
import {Pen} from "../../Datahandler/ToolData";

export default function useBoardData() {
    const [boardData, setBoardData] = useState<Array<BoardData>>([] as Array<BoardData>);

    function addBoardData(type:string, info:Pen) {

        switch (type) {
            case 'pen':
                const newBoardData = {
                    type: type,
                    id: boardData.length,
                    Pen: info
                };
                // @ts-ignore
                setBoardData((boardData) => {
                    return [...boardData, newBoardData];
                });
                break;
            default:
                break;
        }


    }

    function getData() {
        return boardData;
    }

    function DeleteData(id: number){
        console.log("DeleteData : ", id);
        setBoardData((boardData) => {
            return boardData.filter((data) => {
                return data.id !== id;
            });
        });
    }


    return [boardData,{addBoardData,getData,DeleteData}];
}
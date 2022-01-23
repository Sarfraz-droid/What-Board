import {useState} from "react";
import {BoardData} from "../../Datahandler/BoardData";
import {Pen} from "../../Datahandler/ToolData";
// @ts-ignore
import { v4 as uuid4 } from "uuid";
export default function useBoardData() {
    const [boardData, setBoardData] = useState<Array<BoardData>>([] as Array<BoardData>);

    function addBoardData(type:string, info:Pen) {

        switch (type) {
            case 'pen':
                const id:string = uuid4();
                const newBoardData = {
                    type: type,
                    id: id,
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

    function DeleteData(id: string){
        console.log("DeleteData : ", id);
        console.log("boardData : ", boardData.length);
        const newBoardData = boardData.filter((data) => {
            return data.id !== id;
        });
        console.log("newBoardData : ", newBoardData.length);
        setBoardData(newBoardData);

    }


    return [boardData,{addBoardData,getData,DeleteData}];
}
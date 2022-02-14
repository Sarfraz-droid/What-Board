import React,{useEffect,useState} from "react";
import {BoardContext} from "../index";
import {Pen} from "../Datahandler/ToolData";
import styles from '../../styles/Tools.module.scss'
import {BsPenFill,BsEraserFill} from "react-icons/bs";
import {FaMousePointer} from "react-icons/fa";

export default function Tools(){
    const {currentLine,setcurrentLine} = React.useContext(BoardContext);
    const [pen,setpen] = useState({} as Pen);

    useEffect(()=>{
        setpen(currentLine.Pen);
    },[])

    useEffect(() => {
        console.log("Current Line",currentLine);
    }, [currentLine]);


    useEffect(() => {
        setcurrentLine.setPen(pen);
    }, [pen]);

    const setEraser = ({value}:  {value: boolean}) => {
        setpen({
            ...pen,
            isEraser: value
        })
    }



    return (
        <>
            <div className={styles.tools}>
                <button id={"pen"}
                    onClick={() => {
                        setcurrentLine.setCurrentPen("pen");
                        setEraser({value: false})
                    }}
                >
                    <BsPenFill
                        style={{
                            color: (!pen.isEraser && currentLine.currentPen === 'pen') ? "#3F85ED" : "#B0B0B0FF",
                        }}
                    />

                </button>

                <button
                    id={"eraser"}
                    onClick={() => {
                        setcurrentLine.setCurrentPen("pen");
                        setEraser({value: true})
                    }}
                >
                    <BsEraserFill
                        style={{
                            color: (pen.isEraser && currentLine.currentPen === 'pen' ) ? "#3F85ED" : "#B0B0B0FF",
                        }}
                    />
                </button>

                <button>
                    <FaMousePointer
                        onClick={() => setcurrentLine.setCurrentPen('cursor')}
                        style={{
                            color: (currentLine.currentPen === 'cursor') ? "#3F85ED" : "#B0B0B0FF",
                        }}
                    />
                </button>

            </div>
        </>
    )
}
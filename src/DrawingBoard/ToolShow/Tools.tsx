import React,{useEffect,useState} from "react";
import {BoardContext} from "../index";
import {Pen} from "../Datahandler/ToolData";
import styles from '../../styles/Tools.module.scss'
import {BsPenFill,BsEraserFill} from "react-icons/bs";

export default function Tools(){
    const {currentLine,setcurrentLine} = React.useContext(BoardContext);
    const [pen,setpen] = useState({} as Pen);

    useEffect(()=>{
        setpen(currentLine.Pen);
    },[])

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
                    onClick={() => setEraser({value: false})}
                >
                    <BsPenFill
                        style={{
                            color: !pen.isEraser ? "#3F85ED" : "#B0B0B0FF",
                        }}
                    />

                </button>

                <button
                    id={"eraser"}
                    onClick={() => setEraser({value: true})}
                >
                    <BsEraserFill
                        style={{
                            color: pen.isEraser ? "#3F85ED" : "#B0B0B0FF",
                        }}
                    />
                </button>

            </div>
        </>
    )
}
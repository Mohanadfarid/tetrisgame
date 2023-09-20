import React from "react";
import { useSelector } from "react-redux";
import styles from "./board.module.css";
import BoardColumn from "../boardColumn/BoardColumn";
import { useDispatch } from "react-redux";
import { addShape } from "../../features/board/boardSlice";
import { randomShapeGenerator } from "../../features/currentShape/shapes";

const Board = () => {
const dispatch=useDispatch()


  const boardInfo = useSelector((state) => state.board);
  return (
    <>
    <button onClick={()=>{
      console.log(randomShapeGenerator())
    }}>add shape</button>
    <div className={`${styles.boardBody}`}>
      {boardInfo.boardStats.map((columnInfo, idx) => (
        <BoardColumn key={idx} columnInfo={columnInfo}/>
      ))}
    </div>
    </>
  );
};

export default Board;

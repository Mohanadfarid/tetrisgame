import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./board.module.css";
import BoardColumn from "../boardColumn/BoardColumn";
import { useDispatch } from "react-redux";
import { randomShapeGenerator } from "../../features/currentShape/shapes";
import {
  moveDown,
  moveLeft,
  moveRight,
  rotate,
  setcurrentShape,
} from "../../features/currentShape/currentShapeSlice";
import {
  checkIfShapeCanGoDown,
  checkIfShapeCanGoLeft,
  checkIfShapeCanGoRight,
  checkIfShapeCanRotate,
  createShapObject,
} from "../../utils/helpers";
import { clearBoard } from "../../features/board/boardSlice";
import Cell from "../cell/Cell";

const Board = () => {
  const dispatch = useDispatch();
  const boardInfo = useSelector((state) => state.board);
  const shapInfo = useSelector((state) => state.currentShape);
  const [paused, setpaused] = useState(true);
  const [nextShape, setnextShape] = useState(createShapObject(randomShapeGenerator()));


  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        if(checkIfShapeCanGoDown(shapInfo, boardInfo)){
          dispatch(moveDown(shapInfo));
        }else{
          dispatch(setcurrentShape(nextShape));
          setnextShape(createShapObject(randomShapeGenerator()))
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [paused,shapInfo,boardInfo,dispatch,nextShape]);

  const movingLeftHanddler = () => {
    if (checkIfShapeCanGoLeft(shapInfo, boardInfo)) {
      dispatch(moveLeft(shapInfo));
    }
  };

  const movingRightHanddler = () => {
    if (checkIfShapeCanGoRight(shapInfo, boardInfo)) {
      dispatch(moveRight(shapInfo));
    }
  };

  const movingDownHanddler =()=>{
    if (checkIfShapeCanGoDown(shapInfo, boardInfo)) {
      dispatch(moveDown(shapInfo));
    }
  }

  const rotatingHanddler = ()=>{
    if (checkIfShapeCanRotate(shapInfo, boardInfo)){
      dispatch(rotate(shapInfo))
    }
  }
  return (
    <>
      <button
        onClick={() => {
          dispatch(setcurrentShape(nextShape));
          setnextShape(createShapObject(randomShapeGenerator()))
        }}
      >
        start game
      </button>
      <button onClick={movingLeftHanddler}>left</button>
      <button onClick={movingRightHanddler}>right</button>
      <button onClick={movingDownHanddler}>down</button>
      <button onClick={rotatingHanddler}>rotate</button>
      <button onClick={()=>setpaused(!paused)}>{paused?`resume`:`pause`}</button>
      <button onClick={()=>{dispatch(clearBoard())}}>reset board</button>
      
      
      <div className={`${styles.boardBody}`}>
        {boardInfo.boardStats.map((columnInfo, columnidex) => (
          <BoardColumn key={columnidex} columnInfo={columnInfo} />
        ))}
      </div>

      <div className={`${styles.nextShapContainer}`}>
          {
            nextShape.shape.shape[nextShape.shapeFormIndex].map((columnInfo)=>{
              let tempColumnInfo =JSON.parse(JSON.stringify(columnInfo)).reverse()
              return <div className={`${styles.column}`}>
              {tempColumnInfo.map((cellInfo)=> <div style={{backgroundColor:`${cellInfo.color}`}} className={`${styles.cell}`}></div>
              )}</div>
            }
            )
          }
        </div> 

    </>
  );
};

export default Board;

import React from "react";
import { useSelector } from "react-redux";
import styles from "./board.module.css";
import BoardColumn from "../boardColumn/BoardColumn";
import { useDispatch } from "react-redux";
import { randomShapeGenerator } from "../../features/currentShape/shapes";
import {
  moveLeft,
  moveRight,
  setcurrentShape,
} from "../../features/currentShape/currentShapeSlice";
import {
  checkIfShapeCanGoLeft,
  checkIfShapeCanGoRight,
  createShapObject,
} from "../../utils/helpers";

const Board = () => {
  const dispatch = useDispatch();
  const boardInfo = useSelector((state) => state.board);
  const shapInfo = useSelector((state) => state.currentShape);

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
  return (
    <>
      <button
        onClick={() => {
          dispatch(setcurrentShape(createShapObject(randomShapeGenerator())));
        }}
      >
        start game
      </button>
      <button onClick={movingLeftHanddler}>left</button>
      <button onClick={movingRightHanddler}>right</button>
      <button>down</button>
      <div className={`${styles.boardBody}`}>
        {boardInfo.boardStats.map((columnInfo, columnidex) => (
          <BoardColumn key={columnidex} columnInfo={columnInfo} />
        ))}
      </div>
    </>
  );
};

export default Board;

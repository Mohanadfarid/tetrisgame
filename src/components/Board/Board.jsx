import React from "react";
import { useSelector } from "react-redux";
import styles from "./board.module.css";
import BoardColumn from "../boardColumn/BoardColumn";
import { useDispatch } from "react-redux";
import { randomShapeGenerator } from "../../features/currentShape/shapes";
import { setcurrentShape } from "../../features/currentShape/currentShapeSlice";
import { createShapObject } from "../../utils/helpers";

const Board = () => {
  const dispatch = useDispatch();
  const boardInfo = useSelector((state) => state.board);
  return (
    <>
      <button
        onClick={async () => {
          dispatch(setcurrentShape(createShapObject(randomShapeGenerator())));
        }}
      >
        start game
      </button>
      <div className={`${styles.boardBody}`}>
        {boardInfo.boardStats.map((columnInfo, columnidex) => (
          <BoardColumn key={columnidex} columnInfo={columnInfo} />
        ))}
      </div>
    </>
  );
};

export default Board;

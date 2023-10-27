import styles from "./board.module.css";
import BoardColumn from "../boardColumn/BoardColumn";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { checkIfShapCanBeInserted, checkIfShapeCanGoDown } from "../../utils/helpers/checkersHelpers";
import { moveDown, setcurrentShape } from "../../features/currentShape/currentShapeSlice";
import { clearBoard, clearFullRows } from "../../features/board/boardSlice";
import { createShapObject } from "../../utils/helpers/generalHelpers";
import { randomShapeGenerator } from "../../features/currentShape/shapes";




const Board = ({ nextShape, setnextShape,paused,setpaused }) => {

  const dispatch = useDispatch();
  const boardInfo = useSelector((state) => state.board);
  const shapInfo = useSelector((state) => state.currentShape);


  useEffect(() => {
    if (!paused && boardInfo.isGameRuning) {
      const interval = setInterval(() => {
        if (checkIfShapeCanGoDown(shapInfo, boardInfo)) {
          dispatch(moveDown(shapInfo));
        } else {
          if (checkIfShapCanBeInserted(nextShape, boardInfo)) {
            dispatch(clearFullRows());
            dispatch(setcurrentShape(nextShape));
            setnextShape(createShapObject(randomShapeGenerator()));
          } else {
            setpaused(true);
            dispatch(clearBoard());
            alert(`the game has ended! try again?`);
          }
        }
      }, boardInfo.speedLevel);
      return () => clearInterval(interval);
    }
  }, [paused, shapInfo, boardInfo, dispatch, nextShape, setnextShape,setpaused]);


  return (
    <>
      <div className={`${styles.boardBody}`}>
        {boardInfo.boardStats.map((columnInfo, columnidex) => (
          <BoardColumn key={columnidex} columnInfo={columnInfo} />
        ))}
      </div>
    </>
  );
};

export default Board;

import styles from './controles.module.css'
import { useDispatch, useSelector } from "react-redux";
import {
  checkIfShapeCanGoDown,
  checkIfShapeCanGoLeft,
  checkIfShapeCanGoRight,
  checkIfShapeCanRotate,
} from "../../utils/helpers/checkersHelpers";
import {
  moveDown,
  moveLeft,
  moveRight,
  rotate,
} from "../../features/currentShape/currentShapeSlice";

const Controles = () => {
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

  const movingDownHanddler = () => {
    if (checkIfShapeCanGoDown(shapInfo, boardInfo)) {
      dispatch(moveDown(shapInfo));
    }
  };

  const rotatingHanddler = () => {
    if (checkIfShapeCanRotate(shapInfo, boardInfo)) {
      dispatch(rotate(shapInfo));
    }
  };
  return (
    <div className={styles.ControlesContainer}>
      <button className={styles.movementBtn} onClick={movingLeftHanddler}>left</button>
      <button className={styles.movementBtn} onClick={movingDownHanddler}>down</button>
      <button className={styles.movementBtn} onClick={movingRightHanddler}>right</button>
      <button className={styles.movementBtn} onClick={rotatingHanddler}>rotate</button>
    </div>
  );
};

export default Controles;

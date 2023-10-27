
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

const Controles = ({paused,setpaused}) => {
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
    <>
      <button onClick={movingLeftHanddler}>left</button>
      <button onClick={movingRightHanddler}>right</button>
      <button onClick={movingDownHanddler}>down</button>
      <button onClick={rotatingHanddler}>rotate</button>
      <button onClick={() => setpaused(!paused)}>
        {paused ? `resume` : `pause`}
      </button>
    </>
  );
};

export default Controles;

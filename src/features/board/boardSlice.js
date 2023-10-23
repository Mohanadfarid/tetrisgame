import { createSlice } from "@reduxjs/toolkit";
import { initiaBoardlState } from "./initialBoardState";
import {
  moveDown,
  moveLeft,
  moveRight,
  rotate,
  setcurrentShape,
} from "../currentShape/currentShapeSlice";
import {
  addShapeToBoardAndReturnboard,
  deactivateAllBoardCells,
} from "../../utils/helpers/generalHelpers";
import {
  RotateShapAndRetrunboard,
  moveShapDownAndRetrunboard,
  moveShapToLeftAndRetrunboard,
  moveShapToRightAndRetrunboard,
} from "../../utils/helpers/movementHelpers";

const initialState = {
  boardStats: initiaBoardlState,
  speedLevel: 1000, // 1 sec
  score: 0,
  isGameRuning: true,
};

const boardSlice = createSlice({
  initialState,
  name: "board",
  reducers: {
    clearBoard: (state) => {
      state.boardStats = initiaBoardlState;
      state.speedLevel = 1000; // 1 sec
      state.score = 0;
      state.isGameRuning = false;
    },
    addShapeAtTop: (state, action) => {
      state.boardStats = addShapeToBoardAndReturnboard(
        action.payload,
        state.boardStats
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setcurrentShape, (state, action) => {
      //deactivating all the board cells so that the new shap will have the only active cells in the board
      const deactivatedBoard = deactivateAllBoardCells(state.boardStats);
      state.boardStats = addShapeToBoardAndReturnboard(
        action.payload,
        deactivatedBoard
      );
      state.isGameRuning = true;
    });

    builder.addCase(moveLeft, (state, action) => {
      state.boardStats = moveShapToLeftAndRetrunboard(
        action.payload,
        state.boardStats
      );
    });

    builder.addCase(moveRight, (state, action) => {
      state.boardStats = moveShapToRightAndRetrunboard(
        action.payload,
        state.boardStats
      );
    });

    builder.addCase(moveDown, (state, action) => {
      state.boardStats = moveShapDownAndRetrunboard(
        action.payload,
        state.boardStats
      );
    });

    builder.addCase(rotate, (state, action) => {
      state.boardStats = RotateShapAndRetrunboard(
        action.payload,
        state.boardStats
      );
    });
  },
});
export const { addShapeAtTop, clearBoard } = boardSlice.actions;
export default boardSlice.reducer;

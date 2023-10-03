import { createSlice } from "@reduxjs/toolkit";
import { initiaBoardlState } from "./initialBoardState";
import { addShapeToBoardAndReturnboard, moveShapToLeftAndRetrunboard, moveShapToRightAndRetrunboard } from "../../utils/helpers";
import { moveLeft, moveRight, setcurrentShape } from "../currentShape/currentShapeSlice";

const initialTops = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const boardSlice = createSlice({
  initialState: { boardStats: initiaBoardlState, tops: initialTops },
  name: "board",
  reducers: {
    clearBoard: (state) => {
      state.boardStats = initiaBoardlState;
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
      state.boardStats = addShapeToBoardAndReturnboard(
        action.payload,
        state.boardStats
      );
    });

    builder.addCase(moveLeft,(state,action)=>{
      state.boardStats= moveShapToLeftAndRetrunboard(action.payload,state.boardStats)
    })

    builder.addCase(moveRight,(state,action)=>{
      state.boardStats= moveShapToRightAndRetrunboard(action.payload,state.boardStats)
    })
  },
});
export const { addShapeAtTop, clearBoard } = boardSlice.actions;
export default boardSlice.reducer;

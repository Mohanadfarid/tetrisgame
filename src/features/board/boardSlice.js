import { createSlice } from "@reduxjs/toolkit";
import { initiaBoardlState } from "./initialBoardState";
import { addShapeToBoardAndReturnboard } from "../../utils/helpers";
import { setcurrentShape } from "../currentShape/currentShapeSlice";

const initialTops=[0,0,0,0,0,0,0,0,0,0]
const boardSlice = createSlice({
  initialState: {boardStats:initiaBoardlState,tops:initialTops},
  name: "board",
  reducers: {
    clearBoard: (state) => {
      state.boardStats = initiaBoardlState;
    },
    addShapeAtTop:(state,action)=>{
      state.boardStats=addShapeToBoardAndReturnboard(action.payload,state.boardStats)
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(setcurrentShape,(state,action)=>{
state.boardStats=addShapeToBoardAndReturnboard(action.payload,state.boardStats)
    })
  }
});
export const { addShapeAtTop,clearBoard } = boardSlice.actions;
export default boardSlice.reducer

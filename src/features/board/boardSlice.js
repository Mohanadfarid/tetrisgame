import { createSlice } from "@reduxjs/toolkit";
import { initiaBoardlState } from "./initialBoardState";

const initialTops=[0,0,0,0,0,0,0,0,0,0]
const boardSlice = createSlice({
  initialState: {boardStats:initiaBoardlState,tops:initialTops},
  name: "board",
  reducers: {
    clearBoard: (state) => {
      state.boardStats = initiaBoardlState;
    },
    addShape:(state,action)=>{
      // setting the highst top the shap will counter
      let highestTopInShapRange=0
      for (let index = 0; index < state.tops.length; index++) {
        if (highestTopInShapRange<state.tops[index]&&action.payload[index].length>0) {
          highestTopInShapRange=state.tops[index]
        }
      }

      //setting and adjusting new vertual tops to keep the shap intact or preventing it from being reconstructed needs work
      //------------------------------------------------------------------------------------------------------------

      for(let index=0;index<state.tops.length;index++){
        if(action.payload[index].length>0&&highestTopInShapRange>0){
          state.tops[index]=highestTopInShapRange
        }
      }

      //------------------------------------------------------------------------------------------------------------
      // adding the shape to the top of the tops in the board cell by cell
      for(let column =0;column<action.payload.length;column++){
        for (let row = 0; row < action.payload[column].length; row++) {
          state.boardStats[column][19-state.tops[column]].color=action.payload[column][row].color
          state.boardStats[column][19-state.tops[column]].isfull=action.payload[column][row].isfull

          //increasing the top only if the shape's cell is full or it has a full cell above it
          if (action.payload[column][row].isfull||action.payload[column][action.payload[column].length-1].isfull)  
          {
            state.tops[column]=state.tops[column]+1
          }
        }
      }
    }
  },
});
export const { addShape,clearBoard } = boardSlice.actions;
export default boardSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coulmnPossession: 9,
  rowpossession: 0,
  shape: {},
  shapeFormIndex:0,
  isActive: false,
};
const currentShapeSlice = createSlice({
  initialState,
  name: "currentShape",
  reducers: {
    setcurrentShape: (state, action) => {
      state.isActive = true;
      state.shape = action.payload.shape;
      state.coulmnPossession = action.payload.coulmnPossession;
      state.rowpossession = action.payload.rowpossession;
      state.shapeFormIndex = action.payload.shapeFormIndex
    },
    moveLeft: (state) => {
      state.coulmnPossession--
    },
    moveRight: (state) => {
      state.coulmnPossession++
    },
    moveDown: (state,) => {
      state.rowpossession--
    },
    rotate: (state) => {
      const shape = state.shape.shape
      if(state.shapeFormIndex!==shape.length-1){
        state.shapeFormIndex++;
      }else{
        state.shapeFormIndex=0;
      }
    }
  },
});
export const { moveDown, moveLeft, moveRight, rotate, setcurrentShape } =
  currentShapeSlice.actions;
export default currentShapeSlice.reducer;

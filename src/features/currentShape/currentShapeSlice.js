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
    moveLeft: (state, action) => {
      state.coulmnPossession--
    },
    moveRight: (state, action) => {
      state.coulmnPossession++
    },
    moveDown: (state, action) => {
      state.rowpossession--
    },
  },
});
export const { moveDown, moveLeft, moveRight, setcurrentShape } =
  currentShapeSlice.actions;
export default currentShapeSlice.reducer;

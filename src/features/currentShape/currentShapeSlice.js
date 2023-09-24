import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coulmnPossession: 19,
  rowpossession: 0,
  shape: [],
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
    },
    moveLeft: (state, action) => {
      state.coulmnPossession--
    },
    moveRight: (state, action) => {},
    moveDown: (state, action) => {},
  },
});
export const { moveDown, moveLeft, moveRight, setcurrentShape } =
  currentShapeSlice.actions;
export default currentShapeSlice.reducer;

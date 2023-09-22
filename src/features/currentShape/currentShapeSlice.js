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
      state.rowpossession=action.payload.rowpossession
    },
  },
});
export const { setcurrentShape } = currentShapeSlice.actions;
export default currentShapeSlice.reducer;

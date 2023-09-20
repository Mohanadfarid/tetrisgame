import { createSlice } from "@reduxjs/toolkit";

const initialState = [[], [], [], [], [], [], [], [], [], []];
const currentShapeSlice = createSlice({
  initialState,
  name: "currentShape",
  reducers: {
    setcurrentShape: (state, action) => {
      for (let column = 0; column < action.payload.length; column++) {
        state[column] = action.payload[column];
      }
    },
  },
});
export const { setcurrentShape } = currentShapeSlice.actions;
export default currentShapeSlice.reducer;

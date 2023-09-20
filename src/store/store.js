import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "../features/board/boardSlice";
import currentShapeSlice from "../features/currentShape/currentShapeSlice";
export const store = configureStore({
  reducer: { board: boardSlice, currentShape: currentShapeSlice },
});

import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expenseSlice";

const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
});

export default store;
// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

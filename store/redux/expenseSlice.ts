import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DUMMY_EXPENSES } from "../../data/dummy-data";
import { IExpenseProps } from "../../interfaces";

interface ExpenseState {
  expensesList: IExpenseProps[];
}

const initialState: ExpenseState = {
  expensesList: DUMMY_EXPENSES,
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<IExpenseProps>) => {
      state.expensesList.push(action.payload);
    },
    updateExpense: (state, action: PayloadAction<IExpenseProps>) => {
      const index = state.expensesList.findIndex(
        (expense) => expense.id === action.payload.id
      );
      if (index !== -1) {
        state.expensesList[index] = action.payload;
      }
    },

    deleteExpense: (state, action: PayloadAction<string>) => {
      state.expensesList = state.expensesList.filter(
        (expense) => expense.id !== action.payload
      );
    },
  },
});

export const { addExpense, updateExpense, deleteExpense } =
  expenseSlice.actions;

export default expenseSlice.reducer;

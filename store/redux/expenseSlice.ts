import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IExpenseProps {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

interface ExpenseState {
  expenses: IExpenseProps[];
}

const initialState: ExpenseState = {
  expenses: [],
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<IExpenseProps>) => {
      state.expenses.push(action.payload);
    },
    deleteExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
  },
});

export const { addExpense, deleteExpense } = expenseSlice.actions;

export default expenseSlice.reducer;

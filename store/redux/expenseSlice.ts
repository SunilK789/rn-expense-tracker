import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DUMMY_EXPENSES } from "../../data/dummy-data";
import { IExpenseProps } from "../../interfaces";
import { fetchExpense } from "../../utils/http";

interface ExpenseState {
  expensesList: IExpenseProps[];
}

async function getExpenses() {
  const expenses = await fetchExpense();
  return expenses;
}

const initialState: ExpenseState = {
  expensesList: [],
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<IExpenseProps>) => {
      console.log("payLoad===>", action.payload);
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

    setExpenses: (state, action: PayloadAction<IExpenseProps[]>) => {
      state.expensesList = action.payload;
    },
  },
});

export const { addExpense, updateExpense, deleteExpense, setExpenses } =
  expenseSlice.actions;

export default expenseSlice.reducer;

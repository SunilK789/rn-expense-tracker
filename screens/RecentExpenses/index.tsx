import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import ExpensesOutput from "../../components/Expenses/ExpensesOutput";
import { getDateMinusDays } from "../../utils/date";
import { IExpenseProps } from "../../interfaces";
import { RootState } from "../../store/redux/store";
import { fetchExpense } from "../../utils/http";
import { setExpenses } from "../../store/redux/expenseSlice";

const RecentExpenses = () => {
  const [expensesList, setExpensesList] = useState<IExpenseProps[]>();
  const dispatch = useDispatch();

  const expenses: any = useSelector(
    (state: RootState) => state.expense.expensesList
  );

  console.log("redux expenses===>", expenses);

  //console.log("expenses===>", expenses);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpense();
      console.log("uff===>", expenses);
      dispatch(setExpenses(expenses));
    }

    getExpenses();
  }, []);

  function getRecentExpenses(expenses: IExpenseProps[]) {
    const recentExpenses = expenses.filter((expense: IExpenseProps) => {
      //console.log("each expense===>", expense);
      const today = new Date();
      const date7DaysAgo = getDateMinusDays(today, 7);
      console.log("expense.date===>", new Date(expense.date));
      //console.log("date7DaysAgo===>", date7DaysAgo);

      return (
        new Date(expense.date) >= date7DaysAgo &&
        new Date(expense.date) <= today
      );
    });

    return recentExpenses;
  }

  useEffect(() => {
    //if (expenses.length > 0) {
    console.log("expenses inuff2===>", expenses);
    const recentExpenses = getRecentExpenses(expenses);
    console.log("recentExpenses===>", recentExpenses);
    setExpensesList(recentExpenses);
    //}
  }, [expenses]);

  return (
    <ExpensesOutput
      expensesPeriod="Last 7 days"
      expenses={expensesList}
      fallbackText="No registered expenses found"
    />
  );
};

export default RecentExpenses;

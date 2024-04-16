import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import ExpensesOutput from "../../components/Expenses/ExpensesOutput";
import { getDateMinusDays } from "../../utils/date";
import { IExpenseProps } from "../../interfaces";
import { RootState } from "../../store/redux/store";
import { fetchExpense } from "../../utils/http";
import { setExpenses } from "../../store/redux/expenseSlice";
import LoadingOverlay from "../../components/UI/LoadingOverlay";

const RecentExpenses = () => {
  const [expensesList, setExpensesList] = useState<IExpenseProps[]>();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const expenses: any = useSelector(
    (state: RootState) => state.expense.expensesList
  );

  useEffect(() => {
    async function getExpenses() {
      setIsLoading(true);
      const expenses = await fetchExpense();
      setIsLoading(false);
      dispatch(setExpenses(expenses.reverse()));
    }

    getExpenses();
  }, []);

  function getRecentExpenses(expenses: IExpenseProps[]) {
    const recentExpenses = expenses.filter((expense: IExpenseProps) => {
      const today = new Date();
      const date7DaysAgo = getDateMinusDays(today, 7);

      return (
        new Date(expense.date) >= date7DaysAgo &&
        new Date(expense.date) <= today
      );
    });

    return recentExpenses;
  }

  useEffect(() => {
    if (expenses.length > 0) {
      setIsLoading(true);
      const recentExpenses = getRecentExpenses(expenses);
      setIsLoading(false);
      setExpensesList(recentExpenses);
    }
  }, [expenses]);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput
      expensesPeriod="Last 7 days"
      expenses={expensesList}
      fallbackText="No registered expenses found"
    />
  );
};

export default RecentExpenses;

import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import ExpensesOutput from "../../components/Expenses/ExpensesOutput";
import { getDateMinusDays } from "../../utils/date";
import { IExpenseProps } from "../../interfaces";
import { RootState } from "../../store/redux/store";
import { fetchExpense } from "../../utils/http";
import { setExpenses } from "../../store/redux/expenseSlice";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import ErrorOverlay from "../../components/UI/ErrorOverlay";

const RecentExpenses = () => {
  const [expensesList, setExpensesList] = useState<IExpenseProps[]>();
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const expenses: any = useSelector(
    (state: RootState) => state.expense.expensesList
  );

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpense();
        dispatch(setExpenses(expenses.reverse()));
      } catch (error) {
        setError("Something went wrong!");
      }

      setIsFetching(false);
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
      setIsFetching(true);
      const recentExpenses = getRecentExpenses(expenses);
      setIsFetching(false);
      setExpensesList(recentExpenses);
    }
  }, [expenses]);

  function errorHandler() {
    setError(null);
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
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

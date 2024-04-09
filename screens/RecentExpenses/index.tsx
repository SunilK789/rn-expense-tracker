import { useSelector } from "react-redux";
import React from "react";
import ExpensesOutput from "../../components/Expenses/ExpensesOutput";
import { getDateMinusDays } from "../../utils/date";
import { IExpenseProps } from "../../interfaces";
import { RootState } from "../../store/redux/store";

const RecentExpenses = () => {
  const expenses: any = useSelector(
    (state: RootState) => state.expense.expensesList
  );

  //console.log("expenses===>", expenses);
  const recentExpenses = expenses.filter((expense: IExpenseProps) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput
      expensesPeriod="Last 7 days"
      expenses={recentExpenses}
      fallbackText="No registered expenses found"
    />
  );
};

export default RecentExpenses;

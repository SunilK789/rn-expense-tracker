import { View, Text } from "react-native";
import React from "react";
import ExpensesOutput from "../../components/Expenses/ExpensesOutput";
import { DUMMY_EXPENSES } from "../../data/dummy-data";

const RecentExpenses = () => {
  return (
    <ExpensesOutput expensesPeriod="Last 7 days" expenses={DUMMY_EXPENSES} />
  );
};

export default RecentExpenses;

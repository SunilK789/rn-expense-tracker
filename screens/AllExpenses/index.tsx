import { View, Text } from "react-native";
import React from "react";
import ExpensesOutput from "../../components/Expenses/ExpensesOutput";
import { DUMMY_EXPENSES } from "../../data/dummy-data";

const AllExpenses = () => {
  return <ExpensesOutput expensesPeriod="Total" expenses={DUMMY_EXPENSES} />;
};

export default AllExpenses;

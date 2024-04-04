import { View, Text } from "react-native";
import React from "react";
import ExpensesSummary from "../ExpensesSummary";
import ExpensesList from "../ExpensesList";

const ExpensesOutput = ({ expenses, periodName }) => {
  return (
    <>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      <ExpensesList expenses={expenses} />
    </>
  );
};

export default ExpensesOutput;

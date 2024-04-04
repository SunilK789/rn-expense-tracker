import { View, Text } from "react-native";
import React from "react";
import ExpensesSummary from "../ExpensesSummary";
import ExpensesList from "../ExpensesList";
import { DUMMY_EXPENSES } from "../../../data/dummy-data";
import { styles } from "./style";

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;

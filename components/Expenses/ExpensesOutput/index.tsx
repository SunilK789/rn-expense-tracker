import { View, Text } from "react-native";
import React from "react";
import ExpensesSummary from "../ExpensesSummary";
import ExpensesList from "../ExpensesList";
import { DUMMY_EXPENSES } from "../../../data/dummy-data";
import { styles } from "./style";

const ExpensesOutput = ({ expenses, expensesPeriod, fallbackText }) => {
  let content = <Text style={styles.infoText}>{fallbackText} </Text>;
  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
};

export default ExpensesOutput;

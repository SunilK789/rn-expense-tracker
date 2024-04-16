import { View, Text } from "react-native";
import React from "react";
import ExpensesSummary from "../ExpensesSummary";
import ExpensesList from "../ExpensesList";
import { DUMMY_EXPENSES } from "../../../data/dummy-data";
import { styles } from "./style";
import { IExpenseProps } from "../../../interfaces";

interface IExpenseOutputProps{
  expenses: IExpenseProps[],
  expensesPeriod: string,
  fallbackText: string
}

const ExpensesOutput: React.FC<IExpenseOutputProps> = ({ expenses, expensesPeriod, fallbackText }) => {
  console.log("output===>", expenses);
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

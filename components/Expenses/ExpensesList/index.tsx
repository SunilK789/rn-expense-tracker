import { View, Text, FlatList } from "react-native";
import React from "react";
import ExpenseItem from "../ExpenseItem";

const ExpensesList = ({ expenses }) => {
  const renderedExpenseItem = (itemData) => {
    return <ExpenseItem expense={itemData.item} />;
  };
  return (
    <View>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={renderedExpenseItem}
      />
    </View>
  );
};

export default ExpensesList;

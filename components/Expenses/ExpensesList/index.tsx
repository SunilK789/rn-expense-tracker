import { View, Text, FlatList } from "react-native";
import React from "react";
import ExpenseItem from "../ExpenseItem";
import { IExpenseProps } from "../../../interfaces";
interface IExpenseListProps {
  expenses: IExpenseProps[];
}

const ExpensesList: React.FC<IExpenseListProps> = ({ expenses }) => {
  const renderedExpenseItem = (itemData: any) => {
    return <ExpenseItem {...itemData.item} />;
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

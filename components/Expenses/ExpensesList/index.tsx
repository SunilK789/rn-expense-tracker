import { View, Text, FlatList } from "react-native";
import React from "react";

const ExpensesList = ({ expenses }) => {
  const renderedItem = () => {
    return <Text>Test</Text>;
  };
  return (
    <View>
      <FlatList data={expenses} renderItem={renderedItem} />
    </View>
  );
};

export default ExpensesList;

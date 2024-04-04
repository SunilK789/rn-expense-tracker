import { View, Text, Pressable } from "react-native";
import React from "react";

const ExpenseItem = ({expense}) => {
  return (
    <Pressable>
      <View>
        <Text>{expense.description}</Text>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

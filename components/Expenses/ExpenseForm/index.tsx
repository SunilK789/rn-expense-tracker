import { View, Text } from "react-native";
import React from "react";
import Input from "../../UI/Input";

const ExpenseForm = () => {
  function amountChangeHanlder() {}
  function dateChangeHanlder() {}
  function descriptionChangeHanlder() {}
  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHanlder,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: dateChangeHanlder,
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          keyboardType: "default",
          multiline: true,
          placeholder: "add description...",
          autoCorrect: false,
          onChangeText: descriptionChangeHanlder,
        }}
      />
    </View>
  );
};

export default ExpenseForm;

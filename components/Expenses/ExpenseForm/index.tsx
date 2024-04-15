import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Input from "../../UI/Input";
import { styles } from "./style";
import Button from "../../UI/Button";
import { IFormValuesProps } from "../../../interfaces";
import { getFormattedDate } from "../../../utils/date";

const ExpenseForm = ({ onCancel, onSubmit, isEditing, defaultExpense }) => {
  const [inputValues, setInputValues] = useState<IFormValuesProps>({
    Amount: defaultExpense ? defaultExpense.amount.toString() : 0,
    Date: getFormattedDate(defaultExpense ? defaultExpense.date : new Date()),
    Description: defaultExpense ? defaultExpense.description : "",
  });

  function inputChangeHandler(inputIdentifier: string, enteredValue: string) {
    setInputValues((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function onSubmitHandler() {
    const expenseData = {
      Amount: +inputValues.Amount,
      Date: new Date(inputValues.Date),
      Description: inputValues.Description,
    };

    onSubmit(expenseData);
  }

  useEffect(() => {
    console.log("inputValues===>", inputValues);
  }, [inputValues]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Your Expense</Text>
      </View>
      <View style={styles.innerCotainer}>
        <Input
          style={styles.inputRow}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "Amount"),
            value: inputValues.Amount,
          }}
        />
        <Input
          style={styles.inputRow}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "Date"),
            value: inputValues.Date,
          }}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          keyboardType: "default",
          multiline: true,
          placeholder: "add description...",
          autoCorrect: false,
          onChangeText: inputChangeHandler.bind(this, "Description"),
          value: inputValues.Description,
        }}
        style={undefined}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={onSubmitHandler} mode="flat" style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </Button>
        <Button onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

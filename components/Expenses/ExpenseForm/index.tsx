import { View, Text, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import Input from "../../UI/Input";
import { styles } from "./style";
import Button from "../../UI/Button";
import { IFormValuesProps } from "../../../interfaces";
import { getFormattedDate } from "../../../utils/date";

const ExpenseForm = ({ onCancel, onSubmit, isEditing, defaultExpense }) => {
  const [inputValues, setInputValues] = useState<IFormValuesProps>({
    Amount: {
      value: defaultExpense ? defaultExpense.amount.toString() : 0,
      isValid: true,
    },
    Date: {
      value: getFormattedDate(
        defaultExpense ? defaultExpense.date : new Date()
      ),
      isValid: true,
    },
    Description: {
      value: defaultExpense ? defaultExpense.description : "",
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier: string, enteredValue: string) {
    setInputValues((currentInputValues: IFormValuesProps) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function onSubmitHandler() {
    const expenseData = {
      Amount: +inputValues.Amount.value,
      Date: new Date(inputValues.Date.value),
      Description: inputValues.Description.value,
    };

    const amountIsValid = !isNaN(expenseData.Amount) && expenseData.Amount > 0;
    const dateIsValid = expenseData.Date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.Description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      //Alert.alert("Invalid Input", "Please check your inputs!");
      setInputValues({
        ...inputValues,
        Amount: {
          value: inputValues.Amount.value,
          isValid: amountIsValid,
        },
        Date: {
          value: inputValues.Date.value,
          isValid: dateIsValid,
        },
        Description: {
          value: inputValues.Description.value,
          isValid: descriptionIsValid,
        },
      });
      return;
    }

    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputValues.Amount.isValid ||
    !inputValues.Date.isValid ||
    !inputValues.Description.isValid;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Your Expense</Text>
      </View>
      <View style={styles.innerCotainer}>
        <Input
          style={styles.inputRow}
          label="Amount"
          invalid={!inputValues.Amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "Amount"),
            value: inputValues.Amount.value,
          }}
        />
        <Input
          style={styles.inputRow}
          label="Date"
          invalid={!inputValues.Date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "Date"),
            value: inputValues.Date.value,
          }}
        />
      </View>

      <Input
        label="Description"
        invalid={!inputValues.Description.isValid}
        textInputConfig={{
          keyboardType: "default",
          multiline: true,
          placeholder: "add description...",
          autoCorrect: false,
          onChangeText: inputChangeHandler.bind(this, "Description"),
          value: inputValues.Description.value,
        }}
        style={undefined}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>Invalid values entered!</Text>
      )}
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

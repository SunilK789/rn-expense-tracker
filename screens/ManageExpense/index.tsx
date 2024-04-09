import { View, Text } from "react-native";
import React from "react";
import IconButton from "../../components/UI/IconButton";
import { GlobalStyles } from "../../constants/styles";
import { styles } from "./style";
import Button from "../../components/UI/Button";
import { useDispatch } from "react-redux";
import {
  addExpense,
  deleteExpense,
  updateExpense,
} from "../../store/redux/expenseSlice";
import ExpenseForm from "../../components/Expenses/ExpenseForm";

const ManageExpense = ({ route, navigation }) => {
  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;
  const dispatch = useDispatch();

  navigation.setOptions({
    title: isEditing ? "Edit Expense" : "Add Expense",
  });

  function deleteExpenseHandler() {
    dispatch(deleteExpense(editExpenseId));
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function editAddHandler() {
    if (editExpenseId) {
      dispatch(
        updateExpense({
          id: editExpenseId,
          description: "Test!!",
          amount: 19.99,
          date: new Date(),
        })
      );
    } else {
      dispatch(
        addExpense({
          id: new Date().toString() + Math.random(),
          description: "Added Test",
          amount: 29.99,
          date: new Date(),
        })
      );
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View>
        <ExpenseForm />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={editAddHandler} mode="flat" style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </Button>
        <Button onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={24}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

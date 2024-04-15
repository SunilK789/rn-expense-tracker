import { View, Text } from "react-native";
import React from "react";
import IconButton from "../../components/UI/IconButton";
import { GlobalStyles } from "../../constants/styles";
import { styles } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpense,
  deleteExpense,
  updateExpense,
} from "../../store/redux/expenseSlice";
import ExpenseForm from "../../components/Expenses/ExpenseForm";
import { IFormValuesProps } from "../../interfaces";
import { RootState } from "../../store/redux/store";

const ManageExpense = ({ route, navigation }) => {
  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;
  const dispatch = useDispatch();
  const expenses: any = useSelector(
    (state: RootState) => state.expense.expensesList
  );

  const defaultExpense = expenses.find((exp) => exp.id === editExpenseId);

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
  function editAddHandler(expenseData: IFormValuesProps) {
    if (editExpenseId) {
      dispatch(
        updateExpense({
          id: editExpenseId,
          description: expenseData.Description,
          amount: expenseData.Amount,
          date: new Date(expenseData.Date),
        })
      );
    } else {
      dispatch(
        addExpense({
          id: new Date().toString() + Math.random(),
          description: expenseData.Description,
          amount: expenseData.Amount,
          date: new Date(expenseData.Date),
        })
      );
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View>
        <ExpenseForm
          onCancel={cancelHandler}
          onSubmit={editAddHandler}
          isEditing={isEditing}
          defaultExpense={defaultExpense}
        />
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

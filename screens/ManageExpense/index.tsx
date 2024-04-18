import { View, Text } from "react-native";
import React, { useState } from "react";
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
import {
  deleteExpenseFirebase,
  storeExpense,
  updateExpenseFirebase,
} from "../../utils/http";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import ErrorOverlay from "../../components/UI/ErrorOverlay";

const ManageExpense = ({ route, navigation }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

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
    try {
      setIsSubmitting(true);
      deleteExpenseFirebase(editExpenseId);
      dispatch(deleteExpense(editExpenseId));
      setIsSubmitting(false);
      navigation.goBack();
    } catch (error) {
      setError("Can not delete!");
    }
  }
  function cancelHandler() {
    navigation.goBack();
  }
  async function editAddHandler(expenseData: any) {
    const expense = {
      description: expenseData.Description,
      amount: expenseData.Amount,
      date: new Date(expenseData.Date),
    };
    setIsSubmitting(true);

    try {
      if (isEditing) {
        updateExpenseFirebase(editExpenseId, expense);

        dispatch(
          updateExpense({
            id: editExpenseId,
            ...expense,
          })
        );
      } else {
        const id = await storeExpense(expenseData);
        dispatch(
          addExpense({
            id: id,
            ...expense,
          })
        );
      }

      navigation.goBack();
    } catch (error) {
      setError("Can not add/edit data!");
    }
    setIsSubmitting(false);
  }

  function errorHandler() {
    setError(null);
  }
  if (error) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }
  if (isSubmitting) {
    return <LoadingOverlay />;
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

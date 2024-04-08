import { View, Text } from "react-native";
import React from "react";
import IconButton from "../../components/UI/IconButton";
import { GlobalStyles } from "../../constants/styles";
import { styles } from "./style";
import Button from "../../components/UI/Button";

const ManageExpense = ({ route, navigation }) => {
  const expenseIdExist = route.params?.expenseId;
  const isEditing = !!expenseIdExist;

  navigation.setOptions({
    title: isEditing ? "Edit Expense" : "Add Expense",
  });

  function deleteExpenseHandler() {}
  function cancelHandler() {}
  function editAddHandler() {}
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={editAddHandler} mode="flat" style={styles.button}>{isEditing ? 'Update' : 'Add'}</Button>
        <Button onPress={cancelHandler} style={styles.button}>Cancel</Button>
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

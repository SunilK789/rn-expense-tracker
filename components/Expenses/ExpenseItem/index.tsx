import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./style";
import { getFormattedDate } from "../../../utils/date";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants/screens";

const ExpenseItem = ({ id, description, amount, date }) => {
  const navigation = useNavigation();

  const onExpenseItemPressed = () => {
    navigation.navigate(SCREENS.MANAGE_SCREEN, {
      expenseId: id,
    });
  };

  return (
    <Pressable
      onPress={onExpenseItemPressed}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

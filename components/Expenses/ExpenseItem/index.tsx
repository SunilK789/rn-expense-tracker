import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./style";
import { getFormattedDate } from "../../../utils/date";

const ExpenseItem = ({ description, amount, date }) => {
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>{description}</Text>
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

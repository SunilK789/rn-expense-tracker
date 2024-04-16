import axios from "axios";
import { IExpenseProps } from "../interfaces";

const BACKEND_URL =
  "https://react-native-demo-107e4-default-rtdb.firebaseio.com/";

export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + "/expenses.json", expenseData);
}

export async function fetchExpense() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];

  for (var key in response.data) {
      const item = response.data[key];
      console.log("item===>", item);

    const expenseObj: IExpenseProps = {
      id: key,
      amount: item.Amount,
      date: item.Date,
      description: item.Description,
    };

    expenses.push(expenseObj);
  }

  return expenses;
}

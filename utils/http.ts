import axios from "axios";
import { IExpenseProps } from "../interfaces";

const BACKEND_URL =
  "https://react-native-demo-107e4-default-rtdb.firebaseio.com/";

export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_URL + "/expenses.json",
    expenseData
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpense() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];

  for (var key in response.data) {
    const item = response.data[key];

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

export async function updateExpenseFirebase(id: string, expenseData: any) {
  await axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export async function deleteExpenseFirebase(id: string) {
  axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}

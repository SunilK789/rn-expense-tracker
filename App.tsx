import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

const Stack = createNativeStackNavigator();
const ButtomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <ButtomTabs.Navigator>
      <ButtomTabs.Screen name="RecentExpenses" component={RecentExpenses} />
      <ButtomTabs.Screen name="AllExpeses" component={AllExpenses} />
    </ButtomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} />
          <Stack.Screen name="ManageExpenses" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

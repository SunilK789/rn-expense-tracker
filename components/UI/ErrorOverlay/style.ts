import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    alignItems: "center",
    color: "white",
    margin: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

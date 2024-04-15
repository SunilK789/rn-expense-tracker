import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  innerCotainer: {
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    //alignItems: "center",
  },
  inputRow: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
  },

  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
